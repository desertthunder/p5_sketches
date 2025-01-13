import type P5 from "p5";
export function createDownloadButton(
  p: P5,
  label = "Download",
  filename = "filename"
) {
  const canvas = document.querySelector("canvas");
  if (!canvas) return;

  let downloadButton = p
    .createButton(label)
    .mouseClicked(() => {
      canvas.toBlob((blob) => {
        if (!blob) return;
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.download = `${filename}.png`;
        link.href = url;
        link.click();
      });
    })
    .parent("#control-panel");

  for (const cls of ["btn", "btn-outline-success"]) {
    downloadButton = downloadButton.addClass(cls);
  }
}

function exportVid(blob: Blob, filename: string) {
  if (!blob) return;
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.download = `${filename}.webm`;
  link.href = url;
  link.click();
}

export function createRecordButton(
  p: P5,
  label = "Record",
  filename = "recording"
) {
  const canvas = document.querySelector("canvas");
  if (!canvas) return;

  let recordButton = p.createButton(label);
  let is_rec = false;
  const startRecording = (canvas: HTMLCanvasElement) => {
    const chunks: BlobPart[] = [];
    const stream = canvas.captureStream();
    const rec = new MediaRecorder(stream);

    rec.ondataavailable = (e) => chunks.push(e.data);

    rec.onstop = (_e) => {
      const blob = new Blob(chunks, { type: "video/webm" });
      exportVid(blob, filename);
    };

    rec.start();

    setTimeout(() => {
      rec.stop();
      is_rec = false;
      recordButton
        .html(label)
        .removeClass("btn-danger")
        .addClass("btn-outline-danger")
        .removeAttribute("disabled");
    }, 11000);
  };

  recordButton
    .mouseClicked(() => {
      const canvas = document.querySelector("canvas");
      if (!canvas) return;

      if (!is_rec) {
        recordButton
          .html("Recording...")
          .removeClass("btn-outline-danger")
          .addClass("btn-danger")
          .attribute("disabled", "");
        is_rec = true;
        startRecording(canvas);
      }
    })
    .parent("#control-panel");

  for (const cls of ["btn", "btn-outline-danger"]) {
    recordButton = recordButton.addClass(cls);
  }
}
