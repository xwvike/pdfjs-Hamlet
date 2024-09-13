<div
  class="findbar hidden flex top-[80%] flex-wrap bg-white h-15 shadow-2xl rounded-2xl p-4 fixed left-1/2 transform -translate-x-1/2"
  id="findbar"
>
  <span class="loadingInput end">
    <input
      id="findInput"
      class="w-full block box-border rounded-md border-0 py-1.5 text-gray-900 dark:bg-gray-500 dark:text-gray-50 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-50 sm:text-sm sm:leading-6"
      title="Find"
      placeholder="Find in document…"
      tabindex="91"
      data-l10n-id="pdfjs-find-input"
      aria-invalid="false"
    />
  </span>
  <div class="splitToolbarButton flex-shrink-0">
    <button
      id="findPrevious"
      class="toolbarButton"
      title="Find the previous occurrenceO of the phrase"
      tabindex="92"
      data-l10n-id="pdfjs-find-previous-button"
    >
      <span data-l10n-id="pdfjs-find-previous-button-label">Previous</span>
    </button>
    <div class="splitToolbarButtonSeparator"></div>
    <button
      id="findNext"
      class="toolbarButton"
      title="Find the next occurrence of the phrase"
      tabindex="93"
      data-l10n-id="pdfjs-find-next-button"
    >
      <span data-l10n-id="pdfjs-find-next-button-label">Next</span>
    </button>
  </div>
  <div>
    <input type="checkbox" id="findHighlightAll" class="toolbarField" tabindex="94" />
    <label for="findHighlightAll" class="toolbarLabel" data-l10n-id="pdfjs-find-highlight-checkbox"
      >Highlight All</label
    >
  </div>
  <div>
    <input type="checkbox" id="findMatchCase" class="toolbarField" tabindex="95" />
    <label
      for="findMatchCase"
      class="toolbarLabel"
      data-l10n-id="pdfjs-find-match-case-checkbox-label">Match Case</label
    >
  </div>
  <div>
    <input type="checkbox" id="findMatchDiacritics" class="toolbarField" tabindex="96" />
    <label
      for="findMatchDiacritics"
      class="toolbarLabel"
      data-l10n-id="pdfjs-find-match-diacritics-checkbox-label">Match Diacritics</label
    >
  </div>
  <div >
    <input type="checkbox" id="findEntireWord" class="toolbarField" tabindex="97" />
    <label
      for="findEntireWord"
      class="toolbarLabel"
      data-l10n-id="pdfjs-find-entire-word-checkbox-label">Whole Words</label
    >
  </div>

  <div id="findbarMessageContainer" class="flex" aria-live="polite">
    <span id="findResultsCount" class="toolbarLabel"></span>
    <span id="findMsg" class="toolbarLabel"></span>
  </div>
</div>
