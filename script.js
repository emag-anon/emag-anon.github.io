(function () {
  const data = window.EMAG_DEMO_DATA;
  const performanceRoot = document.querySelector("#performance-groups");
  const failureRoot = document.querySelector("#failure-groups");
  if (!data || !performanceRoot || !failureRoot) return;

  const find = (items, id) => items.find((item) => item.id === id);

  const failureKeyword = (video) => video.failure.replace(/\.$/, "");

  function videoDescription(video) {
    if (video.section === "failure" && video.failure) {
      return video.goal
        ? `<p class="failure-goal"><strong>${find(data.tasks, video.task).label}:</strong> ${video.goal}</p>`
        : "";
    }
    if (video.title === "Task goal:") {
      return `<p class="video-goal"><strong>Task goal:</strong> ${video.caption}</p>`;
    }
    // Hide generic success/failure labels; retain specific observations or goals.
    if (/^(Successful|Unsuccessful) .+ rollout\.$/.test(video.caption)) {
      return video.task === "count-place" ? `<p class="video-caption">${video.title}</p>` : "";
    }
    return `<p class="video-caption">${video.caption}</p>`;
  }

  function videoCard(video, controls = "") {
    const failureHeading = video.section === "failure" && video.failure
      ? `<div class="failure-card-heading">
          <span class="failure-icon" aria-hidden="true">☹</span>
          <span class="failure-keyword">${failureKeyword(video)}</span>
        </div>`
      : "";
    return `
      <article class="video-card${video.section === "failure" ? " failure-card" : ""}">
        ${failureHeading}
        <div class="video-shell">
          <video controls playsinline preload="none" poster="${video.poster}" aria-label="${find(data.methods, video.method).label}: ${find(data.tasks, video.task).label} — ${video.title}">
            <source src="${video.src}" type="video/mp4" />
            Your browser does not support HTML video.
          </video>
          ${controls}
        </div>
        <div class="video-description">${videoDescription(video)}</div>
      </article>`;
  }

  performanceRoot.innerHTML = data.tasks.map((task) => {
    const videos = data.videos.filter((video) =>
      video.section === "performance" && video.method === "emag" && video.task === task.id,
    );
    if (!videos.length) return "";
    return `
      <article class="rollout-group performance-task-card">
        <div class="rollout-group-heading">
          <h3>${task.label}</h3>
        </div>
        <div class="video-grid">${videos.map((video) => videoCard(video)).join("")}</div>
      </article>`;
  }).join("");

  const failureVideos = data.videos.filter((video) => video.section === "failure");
  // A 4.019 px horizontal offset over 15 px gives a 150-degree opening.
  const chevron = '<svg viewBox="0 0 24 40" aria-hidden="true" focusable="false"><path d="M10 5 L14.019 20 L10 35" /></svg>';
  const groups = new Map();
  failureRoot.innerHTML = data.methods.map((method) => {
    if (!failureVideos.some((video) => video.method === method.id)) return "";
    return `
      <article class="rollout-group failure-policy">
        <div class="rollout-group-heading">
          <h3>${method.label}</h3>
        </div>
        <div class="failure-task-grid">
          ${data.tasks.map((task) => {
            const videos = failureVideos.filter((video) =>
              video.method === method.id && video.task === task.id,
            );
            const key = `${method.id}-${task.id}`;
            groups.set(key, { videos, index: 0 });
            const navigation = videos.length > 1 ? `
              <button class="failure-arrow failure-prev" type="button" data-direction="-1" aria-label="Previous failure video: ${method.label}, ${task.label}" aria-controls="video-${key}" hidden>
                ${chevron}
              </button>
              <button class="failure-arrow failure-next" type="button" data-direction="1" aria-label="Next failure video: ${method.label}, ${task.label}" aria-controls="video-${key}">
                ${chevron}
              </button>` : "";
            return `
              <section class="failure-task" data-failure-group="${key}" aria-label="${task.label}">
                <div class="failure-viewport" id="video-${key}">
                  ${videos.length ? videoCard(videos[0], navigation) : '<p class="failure-empty">No video available.</p>'}
                </div>
              </section>`;
          }).join("")}
        </div>
      </article>`;
  }).join("");

  failureRoot.addEventListener("click", (event) => {
    const button = event.target.closest(".failure-arrow");
    if (!button) return;
    const task = button.closest(".failure-task");
    const group = groups.get(task.dataset.failureGroup);
    if (!group || group.videos.length < 2) return;
    const nextIndex = group.index + Number(button.dataset.direction);
    if (nextIndex < 0 || nextIndex >= group.videos.length) return;
    const viewport = task.querySelector(".failure-viewport");
    const previousVideo = viewport.querySelector("video");
    // Keep the button and keyboard focus stable while replacing the media.
    previousVideo.pause();
    group.index = nextIndex;
    const nextVideo = group.videos[group.index];
    previousVideo.querySelector("source").src = nextVideo.src;
    previousVideo.poster = nextVideo.poster;
    previousVideo.setAttribute("aria-label", `${find(data.methods, nextVideo.method).label}: ${find(data.tasks, nextVideo.task).label} — ${nextVideo.title}`);
    previousVideo.load();
    viewport.querySelector(".failure-keyword").textContent = failureKeyword(nextVideo);
    viewport.querySelector(".video-description").innerHTML = videoDescription(nextVideo);
    const previousButton = task.querySelector(".failure-prev");
    const nextButton = task.querySelector(".failure-next");
    const hadFocus = document.activeElement === button;
    previousButton.hidden = group.index === 0;
    nextButton.hidden = group.index === group.videos.length - 1;
    if (hadFocus && button.hidden) {
      (previousButton.hidden ? nextButton : previousButton).focus({ preventScroll: true });
    }
  });
  document.querySelector("#real-robot").addEventListener("play", (event) => {
    if (!(event.target instanceof HTMLVideoElement)) return;
    document.querySelectorAll("#real-robot video").forEach((video) => {
      if (video !== event.target) video.pause();
    });
  }, true);
})();
