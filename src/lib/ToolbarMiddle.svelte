<script>
  import { onMount } from 'svelte'
  import { scalechanging } from '../event.js'

  /*
   * type: number (0.1-6)
   */
  let scale = 1
  /*
   * type: string (auto, page-width)
   */
  let scaleMode = 'auto'
  $: scaleText = (scale * 100).toFixed(0) + '%'
  onMount(() => {
    scalechanging.subscribe({
      next: (e) => {
        scale = e.scale
      },
    })
  })
  const zoomOut = () => {
    PDFViewerApplication.eventBus.dispatch('zoomout')
  }
  const zoomIn = () => {
    PDFViewerApplication.eventBus.dispatch('zoomin')
  }
  const customZoom = () => {
    let num = parseInt((scaleText.match(/\d+/g) || []).join(''))
    if (!scaleText || scaleText === '0' || isNaN(num)) {
      scaleText = (scale * 100).toFixed(0) + '%'
      return
    }
    let _scale = Math.round(num / 10) * 10
    _scale = _scale < 10 ? 10 : _scale > 600 ? 600 : _scale
    scale = _scale / 100
    PDFViewerApplication.eventBus.dispatch('scalechanged', { value: scale })
  }
  const setScaleMode = () => {
    scaleMode = scaleMode === 'auto' ? 'page-width' : 'auto'
    PDFViewerApplication.eventBus.dispatch('scalechanged', { value: scaleMode })
  }
</script>

<div class="text-black dark:text-white flex items-center">
  <div title="Zoom Out" data-l10n-id="pdfjs-zoom-out-button">
    <svg
      tabindex="0"
      role="button"
      on:click={zoomOut}
      on:keydown={(e) => e.key === 'Enter' && zoomOut()}
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
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l14 0" />
    </svg>
  </div>
  <div class="relative mx-2 w-16 rounded-md">
    <input
      type="text"
      class="max-sm:px-0 block box-border w-full rounded-md border-0 py-1.5 text-gray-900 dark:bg-gray-500 dark:text-gray-50 text-center ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-50 sm:text-sm sm:leading-6"
      bind:value={scaleText}
      on:focus={(e) => e.target.select()}
      on:keydown={(e) => e.key === 'Enter' && customZoom()}
    />
  </div>
  <div title="Zoom In" data-l10n-id="pdfjs-zoom-in-button">
    <svg
      tabindex="0"
      on:click={zoomIn}
      role="button"
      on:keydown={(e) => e.key === 'Enter' && zoomIn()}
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
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 5l0 14" />
      <path d="M5 12l14 0" />
    </svg>
  </div>
  <div class="w-[1px] max-sm:w-0 max-sm:mx-0 h-6 mx-2 bg-gray-200"></div>
  <div class="overflow-hidden max-sm:w-0">
    {#if scaleMode === 'auto'}
      <svg
        tabindex="0"
        role="button"
        on:click={setScaleMode}
        on:keydown={(e) => e.key === 'Enter' && setScaleMode}
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
        <title data-l10n-id="pdfjs-page-scale-width">Page Width</title>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
          d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"
        /><path d="M10 18h-7" /><path d="M21 18h-7" /><path d="M6 15l-3 3l3 3" /><path
          d="M18 15l3 3l-3 3"
        /></svg
      >
    {:else}
      <svg
        tabindex="0"
        role="button"
        on:click={setScaleMode}
        on:keydown={(e) => e.key === 'Enter' && setScaleMode}
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
        <title data-l10n-id="pdfjs-page-scale-auto">Automatic Zoom</title>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
          d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6"
        /><path d="M18 14v7" /><path d="M18 3v7" /><path d="M15 18l3 3l3 -3" /><path
          d="M15 6l3 -3l3 3"
        /></svg
      >
    {/if}
  </div>
</div>
