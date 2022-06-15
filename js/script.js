let videoDialogWidth = 720;
let videoDialogHeight = 420;

let videoDialog = $(`#planeWing`).dialog({
  modal:false,
  autoOpen: false,
  width: videoDialogWidth,
  height: videoDialogHeight,
  resizable: false
})

let videoDialog2 = $(`#stewardess`).dialog({
  modal:false,
  autoOpen: false,
  width: videoDialogWidth,
  height: videoDialogHeight,
  resizable: false
})

// videoDialog.draggable();

// $(`video`).draggable();

$("#windowButton").click(function(){
  videoDialog.dialog("open");
})

$("#stewardessButton").click(function(){
  videoDialog2.dialog("open");
})
