<script>
  import { pagechanging } from '../event.js'
  import { onMount } from 'svelte'

  let page = 1
  let pagesCount = 0
  onMount(() => {
    pagechanging.subscribe({
      next: (e) => {
        page = e.pageNumber
        pagesCount = PDFViewerApplication.pagesCount
      },
    })
  })

  let showToolsPanel = false
  const openFile = () => {
    showToolsPanel = false
    window.PDFViewerApplication.eventBus.dispatch('openfile')
  }
  const print = () => {
    showToolsPanel = false
    window.PDFViewerApplication.eventBus.dispatch('print')
  }
  const GotoFirstPage = () => {
    showToolsPanel = false
    window.PDFViewerApplication.eventBus.dispatch('firstpage')
  }
  const GotoLastPage = () => {
    showToolsPanel = false
    window.PDFViewerApplication.eventBus.dispatch('lastpage')
  }
  const RotateClockwise = () => {
    window.PDFViewerApplication.eventBus.dispatch('rotatecw')
  }
  const RotateCounterclockwise = () => {
    window.PDFViewerApplication.eventBus.dispatch('rotateccw')
  }
</script>

<div class="relative inline-block text-left">
  <div>
    <svg
      on:click={(e) => (showToolsPanel = !showToolsPanel)}
      on:keydown={(e) => e.key === 'Enter' && (showToolsPanel = !showToolsPanel)}
      role="button"
      tabindex="0"
      id="menu-button"
      aria-expanded="true"
      aria-haspopup="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="select-none hover:bg-gray-100 dark:hover:bg-gray-800 p-1 rounded-full cursor-pointer"
    >
      <title data-l10n-id="pdfjs-tools-button-label">Tools</title>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
        d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
      /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path
        d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
      /></svg
    >
  </div>
  {#if showToolsPanel}
    <div
      on:click={(e) => (showToolsPanel = !showToolsPanel)}
      class="w-screen h-screen fixed z-20 top-0 left-0"
    ></div>
  {/if}
  {#if showToolsPanel}
    <div
      class="absolute right-0 z-30 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      class:toolsPanelEnter={showToolsPanel}
      class:toolsPanelLeave={!showToolsPanel}
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <div class="py-1" role="none">
        <div
          on:keydown={(e) => e.key === 'Enter' && openFile()}
          on:click={openFile}
          class="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:actext-gray-900"
          role="menuitem"
          tabindex="-1"
          data-l10n-id="pdfjs-open-file-button-label"
        >
          Open
        </div>
        <div
          on:keydown={(e) => e.key === 'Enter' && print()}
          on:click={print}
          class="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:actext-gray-900"
          role="menuitem"
          tabindex="-1"
          data-l10n-id="pdfjs-print-button-label"
        >
          Print
        </div>
      </div>
      <div class="py-1" role="none">
        <div
          on:click={GotoFirstPage}
          on:keydown={(e) => e.key === 'Enter' && GotoFirstPage()}
          class="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:actext-gray-900"
          class:text-gray-400={page === 1}
          role="menuitem"
          tabindex="-1"
          data-l10n-id="pdfjs-first-page-button-label"
        >
          Go to First Page
        </div>
        <div
          on:click={GotoLastPage}
          on:keydown={(e) => e.key === 'Enter' && GotoLastPage()}
          class="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:actext-gray-900"
          class:text-gray-400={page === pagesCount}
          role="menuitem"
          tabindex="-1"
          data-l10n-id="pdfjs-last-page-button-label"
        >
          Go to Last Page
        </div>
      </div>
      <div class="py-1" role="none">
        <div
          on:click={RotateClockwise}
          on:keydown={(e) => e.key === 'Enter' && RotateClockwise()}
          class="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:actext-gray-900"
          role="menuitem"
          tabindex="-1"
          data-l10n-id="pdfjs-page-rotate-cw-button-label"
        >
          Rotate Clockwise
        </div>
        <div
          on:click={RotateCounterclockwise}
          on:keydown={(e) => e.key === 'Enter' && RotateCounterclockwise()}
          class="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:actext-gray-900"
          role="menuitem"
          tabindex="-1"
          data-l10n-id="pdfjs-page-rotate-ccw-button-label"
        >
          Rotate Counterclockwise
        </div>
      </div>
<!--      <div class="py-1" role="none"></div>-->
    </div>
  {/if}
</div>

<style>
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.95);
    }
  }
  .toolsPanelEnter {
    animation: fadeIn ease-out 100ms;
  }
  .toolsPanelLeave {
    animation: fadeOut 75ms ease-out;
  }
</style>
