<dialog
  id="passwordDialog"
  class="_center border-0 m-0 fixed transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-96 max-sm:w-full"
>
  <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
    <div class="sm:flex sm:items-start">
      <div
        class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
      >
        <svg
          class="h-6 w-6 text-red-600"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M5 11m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"
          />
          <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <path d="M8 11v-5a4 4 0 0 1 8 0" />
        </svg>
      </div>
      <div class="mt-3 w-full text-center sm:ml-4 sm:mt-0 sm:text-left">
        <label
          for="password"
          id="passwordText"
          class="text-base font-semibold leading-6 text-gray-900"
          data-l10n-id="pdfjs-password-label"
        >
          Enter the password to open this PDF file:
        </label>
        <input
          type="password"
          id="password"
          class="w-full mt-2 block box-border w-full rounded-md border-0 py-1.5 text-gray-900 dark:bg-gray-500 dark:text-gray-50 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-50 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  </div>
  <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 box-border">
    <button
      id="passwordSubmit"
      data-l10n-id="pdfjs-password-ok-button"
      type="button"
      class="max-sm:w-full inline-flex w-auto justify-center rounded-md bg-red-600 max-sm:px-0 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
      >Ok
    </button>
    <button
      data-l10n-id="pdfjs-password-cancel-button"
      type="button"
      id="passwordCancel"
      class="max-sm:w-full mt-3 inline-flex w-auto justify-center rounded-md bg-white max-sm:px-0 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
      >Cancel
    </button>
  </div>
</dialog>

<style>
  ._center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
  }
</style>
