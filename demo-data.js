window.EMAG_DEMO_DATA = {
  tasks: [
    { id: "count-place", label: "Count Place", emagResult: "88.3 ± 2.9%" },
    { id: "block-unmask", label: "Block Unmask", emagResult: "63.3 ± 7.6%" },
    { id: "button-replay", label: "Button Replay", emagResult: "80.0 ± 8.7%" },
  ],
  methods: [
    { id: "pi05", label: "π₀.₅", kind: "Baseline" },
    { id: "framesampl-modul", label: "FrameSamp+Modul", kind: "Baseline" },
    { id: "emag", label: "EMAG", kind: "Ours" },
  ],
  videos: [
    {
      "id": "emag-count-place-yellow-success",
      "task": "count-place",
      "method": "emag",
      "outcome": "success",
      "title": "Task goal:",
      "caption": "Put one yellow block into the bin, then press the button to stop."
    },
    {
      "id": "emag-count-place-green-success",
      "task": "count-place",
      "method": "emag",
      "outcome": "success",
      "title": "Task goal:",
      "caption": "Put one green block into the bin, then press the button to stop."
    },
    {
      "id": "emag-count-place-yellow-green-success",
      "task": "count-place",
      "method": "emag",
      "outcome": "success",
      "title": "Task goal:",
      "caption": "Put one yellow block and one green block into the bin, then press the button to stop."
    },
    {
      "id": "pi05-count-place-two-green-failure",
      "task": "count-place",
      "method": "pi05",
      "outcome": "failure",
      "title": "Two-green-block trial",
      "caption": "Unsuccessful Count Place rollout.",
      "goal": "Put two green blocks into the bin, then press the button to stop.",
      "failure": "Policy stall."
    },
    {
      "id": "pi05-count-place-green-yellow-failure",
      "task": "count-place",
      "method": "pi05",
      "outcome": "failure",
      "title": "Green-and-yellow trial",
      "caption": "Unsuccessful Count Place rollout.",
      "goal": "Put one green block and one yellow block into the bin, then press the button to stop.",
      "failure": "Premature termination."
    },
    {
      "id": "pi05-block-unmask-grasp-failure",
      "task": "block-unmask",
      "method": "pi05",
      "outcome": "failure",
      "title": "Grasp slippage",
      "caption": "The grasp slips before lifting the cup.",
      "goal": "Pick up the cup covering the red block.",
      "failure": "Grasp slippage."
    },
    {
      "id": "pi05-block-unmask-wrong-cover",
      "task": "block-unmask",
      "method": "pi05",
      "outcome": "failure",
      "title": "Incorrect cover selection",
      "caption": "The rollout selects an incorrect cover.",
      "goal": "Pick up the cup covering the blue block.",
      "failure": "Incorrect cup selection."
    },
    {
      "id": "pi05-button-replay-trial-01",
      "task": "button-replay",
      "method": "pi05",
      "outcome": "failure",
      "title": "Sequence replay · trial 1",
      "caption": "Unsuccessful Button Replay rollout.",
      "goal": "Replay the demonstrated button sequence in order.",
      "failure": "Incorrect button order."
    },
    {
      "id": "pi05-button-replay-trial-02",
      "task": "button-replay",
      "method": "pi05",
      "outcome": "failure",
      "title": "Sequence replay · trial 2",
      "caption": "Unsuccessful Button Replay rollout.",
      "goal": "Replay the demonstrated button sequence in order.",
      "failure": "Incorrect button order."
    },
    {
      "id": "framesamp-count-place-first-grasp",
      "task": "count-place",
      "method": "framesampl-modul",
      "outcome": "failure",
      "title": "First-pick failure",
      "caption": "Grasp failure on the first pick.",
      "goal": "Put two green blocks into the bin, then press the button to stop.",
      "failure": "Block grasp failure."
    },
    {
      "id": "framesamp-count-place-second-grasp",
      "task": "count-place",
      "method": "framesampl-modul",
      "outcome": "failure",
      "title": "Second-pick failure",
      "caption": "Grasp failure on the second pick.",
      "goal": "Put one green block and one yellow block into the bin, then press the button to stop.",
      "failure": "Block grasp failure."
    },
    {
      "id": "framesamp-block-unmask-grasp-failure",
      "task": "block-unmask",
      "method": "framesampl-modul",
      "outcome": "failure",
      "title": "Grasp slippage",
      "caption": "The grasp slips before lifting the cup.",
      "goal": "Pick up the cup covering the yellow block.",
      "failure": "Grasp slippage."
    },
    {
      "id": "framesamp-block-unmask-wrong-cover",
      "task": "block-unmask",
      "method": "framesampl-modul",
      "outcome": "failure",
      "title": "Incorrect cover selection",
      "caption": "The rollout selects an incorrect cover.",
      "goal": "Pick up the cup covering the yellow block.",
      "failure": "Incorrect cup selection."
    },
    {
      "id": "emag-count-place-grasp-failure",
      "task": "count-place",
      "method": "emag",
      "outcome": "failure",
      "title": "Grasp failure",
      "caption": "EMAG fails to pick up the block.",
      "goal": "Put one yellow block into the bin, then press the button to stop.",
      "failure": "Block grasp failure."
    },
    {
      "id": "emag-count-place-placement-failure",
      "task": "count-place",
      "method": "emag",
      "outcome": "failure",
      "title": "Placement failure",
      "caption": "EMAG fails to complete the placement.",
      "goal": "Put one green block into the bin, then press the button to stop.",
      "failure": "Premature block release."
    },
    {
      "id": "emag-block-unmask-success-01",
      "task": "block-unmask",
      "method": "emag",
      "outcome": "success",
      "title": "Task goal:",
      "caption": "Pick up the cup covering the yellow block."
    },
    {
      "id": "emag-block-unmask-success-02",
      "task": "block-unmask",
      "method": "emag",
      "outcome": "success",
      "title": "Task goal:",
      "caption": "Pick up the cup covering the yellow block."
    },
    {
      "id": "emag-block-unmask-success-03",
      "task": "block-unmask",
      "method": "emag",
      "outcome": "success",
      "title": "Task goal:",
      "caption": "Pick up the cups covering the red and blue blocks."
    },
    {
      "id": "emag-button-replay-success-02",
      "task": "button-replay",
      "method": "emag",
      "outcome": "success",
      "title": "Task goal:",
      "caption": "Replay the demonstrated button sequence in order."
    },
    {
      "id": "emag-button-replay-success-03",
      "task": "button-replay",
      "method": "emag",
      "outcome": "success",
      "title": "Task goal:",
      "caption": "Replay the demonstrated button sequence in order."
    },
    {
      "id": "emag-button-replay-success-04",
      "task": "button-replay",
      "method": "emag",
      "outcome": "success",
      "title": "Task goal:",
      "caption": "Replay the demonstrated button sequence in order."
    },
    {
      "id": "framesamp-button-replay-failure-01",
      "task": "button-replay",
      "method": "framesampl-modul",
      "outcome": "failure",
      "title": "Sequence replay · trial 1",
      "caption": "Unsuccessful Button Replay rollout.",
      "goal": "Replay the demonstrated button sequence in order.",
      "failure": "Incorrect button order."
    },
    {
      "id": "framesamp-button-replay-failure-02",
      "task": "button-replay",
      "method": "framesampl-modul",
      "outcome": "failure",
      "title": "Sequence replay · trial 2",
      "caption": "Unsuccessful Button Replay rollout.",
      "goal": "Replay the demonstrated button sequence in order.",
      "failure": "Incorrect button order."
    },
    {
      "id": "emag-block-unmask-failure-01",
      "task": "block-unmask",
      "method": "emag",
      "outcome": "failure",
      "title": "Block Unmask · trial 1",
      "caption": "Unsuccessful Block Unmask rollout.",
      "goal": "Pick up the cup covering the blue block.",
      "failure": "Grasp slippage."
    },
    {
      "id": "emag-block-unmask-failure-02",
      "task": "block-unmask",
      "method": "emag",
      "outcome": "failure",
      "title": "Block Unmask · trial 2",
      "caption": "Unsuccessful Block Unmask rollout.",
      "goal": "Pick up the cups covering the red and blue blocks.",
      "failure": "Grasp slippage."
    },
    {
      "id": "emag-button-replay-failure-01",
      "task": "button-replay",
      "method": "emag",
      "outcome": "failure",
      "title": "Sequence replay · trial 1",
      "caption": "Unsuccessful Button Replay rollout.",
      "goal": "Replay the demonstrated button sequence in order.",
      "failure": "Omitted button press."
    },
    {
      "id": "emag-button-replay-failure-02",
      "task": "button-replay",
      "method": "emag",
      "outcome": "failure",
      "title": "Sequence replay · trial 2",
      "caption": "Unsuccessful Button Replay rollout.",
      "goal": "Replay the demonstrated button sequence in order.",
      "failure": "Omitted button press."
    }
  ].map((video) => ({
    ...video,
    section: video.outcome === "success" ? "performance" : "failure",
    src: `assets/videos/${video.id}.mp4`,
    poster: `assets/posters/${video.id}.jpg`,
  })),
};
