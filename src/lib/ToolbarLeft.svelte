<script>
  import { onMount } from 'svelte'
  import { pagechanging } from '../event.js'

  let page = 1
  let pagesCount = 1
  let pageText = '1'
  onMount(() => {
    pagechanging.subscribe({
      next: (e) => {
        page = e.pageNumber
        pageText = e.pageNumber
        pagesCount = PDFViewerApplication.pagesCount
      },
    })
  })

  const setPage = () => {
    let num = parseInt((pageText.match(/\d+/g) || []).join(''))
    num = num <= 1 ? 1 : num >= pagesCount ? pagesCount : num
    window.PDFViewerApplication.eventBus.dispatch('pagenumberchanged', { value: num })
  }
</script>

<div class="flex items-center text-black dark:text-white">
  <div title="Toggle Sidebar" data-l10n-id="pdfjs-toggle-sidebar-button">
    <svg
      id="sidebarToggle"
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
      <title data-l10n-id="pdfjs-toggle-sidebar-button-label">Toggle Sidebar</title>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6l16 0" /><path
      d="M4 12l16 0"
    /><path d="M4 18l16 0" /></svg
    >
  </div>
  <div class="relative mx-2 w-10 rounded-md">
    <input
      type="text"
      class="block box-border w-full rounded-md border-0 py-1.5 text-gray-900 dark:bg-gray-500 dark:text-gray-50 text-center ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-50 sm:text-sm sm:leading-6"
      bind:value={pageText}
      on:focus={(e) => e.target.select()}
      on:keydown={(e) => e.key === 'Enter' && setPage()}
    />
  </div>
  {pagesCount}
</div>
