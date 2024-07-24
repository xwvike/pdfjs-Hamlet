<dialog id="printServiceDialog" class="p-4 border-0 rounded-lg shadow-lg ring-1 ring-gray-200">
  <div class="flex w-auto justify-center items-center flex-nowrap">
    <div class="flex items-center">
      <span
        class="text-sm flex-shrink-0 text-gray-900 mr-2 overflow-hidden max-sm:hidden"
        data-l10n-id="pdfjs-print-progress-message">Preparing document for printing…</span
      >
      <progress class="progress border-0 appearance-none rounded-[2px] overflow-hidden bg-gray-200 mr-2 h-3" value="0" max="100"></progress>
      <span data-l10n-id="pdfjs-print-progress-percent" class="relative-progress">0%</span>
    </div>
    <div class="buttonRow">
      <button id="printCancel" class="text-blue-500 ml-3 text-sm font-medium"
        ><span data-l10n-id="pdfjs-print-progress-close-button">Cancel</span></button
      >
    </div>
  </div>
</dialog>

<style>
  /* 自定义进度条 */
  .progress::-webkit-progress-bar {
    background-color: #f3f3f3; /* 背景颜色 */
    border-radius: 2px; /* 圆角 */
  }

  .progress::-webkit-progress-value {
    background-color: rgb(59 130 246); /* 进度颜色 */
    border-radius: 2px; /* 圆角 */
  }

  /* Firefox */
  .progress::-moz-progress-bar {
    background-color: rgb(59 130 246); /* 进度颜色 */
    border-radius: 2px; /* 圆角 */
  }

  /* Edge */
  .progress::-ms-fill {
    background-color: rgb(59 130 246); /* 进度颜色 */
    border-radius: 2px; /* 圆角 */
  }
</style>
