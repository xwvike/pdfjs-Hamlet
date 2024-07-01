<script>
  // console.log(PDFViewerApplication&&PDFViewerApplication.page)
  import { onMount } from 'svelte';

  onMount(() => {
    console.log('hello')
    setTimeout(_=>{
      window.PDFViewerApplication.eventBus.on('pagechanging',_=>{
        console.log(_)
      })
    },0)
  });
  const goLast = () => {
    console.log('goLast')
    window.PDFViewerApplication.eventBus.dispatch('lastpage')
  }
</script>
<div id="outerContainer">
  <div role="button" on:click={goLast} class="w-full h-[32px] bg-white z-50 flex justify-center items-center fixed top-0 left-0">hello</div>
  <div id="mainContainer">
    <div id="viewerContainer" class="inset-0" tabindex="0">
      <div id="viewer" class="pdfViewer"></div>
    </div>
  </div>
</div>
