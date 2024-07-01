<script>
  import { onMount } from 'svelte';

  onMount(() => {
    setTimeout(_=>{
      window.PDFViewerApplication.eventBus.on('pagechanging',_=>{
        console.log(_)
      })
    },0)
  });
</script>
<div id="outerContainer">
  <div id="mainContainer">
    <div id="viewerContainer" style="inset: 0" tabindex="0">
      <div id="viewer" class="pdfViewer"></div>
    </div>
  </div>
</div>
