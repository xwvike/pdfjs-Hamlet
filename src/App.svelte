<script>
  import { onMount } from 'svelte'
  import Toolbar from './lib/Toolbar.svelte'
  import LoadingBar from './lib/LoadingBar.svelte'
  import PasswordDialog from './lib/PasswordDialog.svelte'
  import { defaultOptions } from './app_options.js'
  import { scalechanging, pagechanging, documentloaded } from './event.js'
  import PrintServiceDialog from './lib/PrintServiceDialog.svelte'
  import SidebarContent from './lib/SidebarContent.svelte'
  import DocumentProperties from './lib/DocumentProperties.svelte'
  import FindBar from './lib/FindBar.svelte'

  onMount(async () => {
    await import('../public/pdf.js/web/viewer.mjs')
    window.PDFViewerApplication.eventBus.on('scalechanging', (e) => {
      scalechanging.next(e)
    })
    window.PDFViewerApplication.eventBus.on('pagechanging', (e) => {
      pagechanging.next(e)
    })
    window.PDFViewerApplication.eventBus.on('documentloaded', (e) => {
      documentloaded.next(e)
    })
  })
</script>

<div id="outerContainer">
  {#if defaultOptions.showToolBar.value}
    <Toolbar />
  {/if}
  {#if defaultOptions.showLoadingBar.value}
    <LoadingBar />
  {/if}
  <div id="mainContainer">
    <div
      id="viewerContainer"
      style:top={defaultOptions.showToolBar.value ? '3rem' : '0'}
      tabindex="-1"
    >
      <div id="viewer" class="pdfViewer"></div>
    </div>
  </div>
  <PasswordDialog />
  <PrintServiceDialog />
  <SidebarContent />
  <DocumentProperties />
  <FindBar />
</div>
<div id="printContainer"></div>
