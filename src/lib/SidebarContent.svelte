<script>
</script>

<div id="sidebarContainer" class="z-0 border-0 shadow bg-white" style="inset-block-start: 3rem">
  <div id="toolbarSidebar" class="shadow-none h-10 flex items-center justify-between">
    <div id="toolbarSidebarLeft" class=" pl-2">
      <div id="sidebarViewButtons" class="splitToolbarButton toggled" role="radiogroup">
        <button
          id="viewThumbnail"
          class="toolbarButton toggled rounded-full mr-1"
          title="Show Thumbnails"
          tabindex="2"
          data-l10n-id="pdfjs-thumbs-button"
          role="radio"
          aria-checked="true"
          aria-controls="thumbnailView"
        >
          <span data-l10n-id="pdfjs-thumbs-button-label">Thumbnails</span>
        </button>
        <button
          id="viewOutline"
          class="toolbarButton rounded-full mr-1"
          title="Show Document Outline (double-click to expand/collapse all items)"
          tabindex="3"
          data-l10n-id="pdfjs-document-outline-button"
          role="radio"
          aria-checked="false"
          aria-controls="outlineView"
        >
          <span data-l10n-id="pdfjs-document-outline-button-label">Document Outline</span>
        </button>
        <button
          id="viewAttachments"
          class="toolbarButton rounded-full mr-1"
          title="Show Attachments"
          tabindex="4"
          data-l10n-id="pdfjs-attachments-button"
          role="radio"
          aria-checked="false"
          aria-controls="attachmentsView"
        >
          <span data-l10n-id="pdfjs-attachments-button-label">Attachments</span>
        </button>
        <button
          id="viewLayers"
          class="toolbarButton rounded-full mr-1"
          title="Show Layers (double-click to reset all layers to the default state)"
          tabindex="5"
          data-l10n-id="pdfjs-layers-button"
          role="radio"
          aria-checked="false"
          aria-controls="layersView"
        >
          <span data-l10n-id="pdfjs-layers-button-label">Layers</span>
        </button>
      </div>
    </div>

    <div id="toolbarSidebarRight">
      <div id="outlineOptionsContainer">
        <div class="verticalToolbarSeparator"></div>

        <button
          id="currentOutlineItem"
          class="toolbarButton"
          disabled="disabled"
          title="Find Current Outline Item"
          tabindex="6"
          data-l10n-id="pdfjs-current-outline-item-button"
        >
          <span data-l10n-id="pdfjs-current-outline-item-button-label">Current Outline Item</span>
        </button>
      </div>
    </div>
  </div>
  <div id="sidebarContent" class="shadow-none" style="inset-block-start: 2.5rem">
    <div id="thumbnailView"></div>
    <div id="outlineView" class="hidden"></div>
    <div id="attachmentsView" class="hidden"></div>
    <div id="layersView" class="hidden"></div>
  </div>
  <div id="sidebarResizer" class="hover:bg-blue-200 transform-gpu transition-colors"></div>
</div>
<!-- sidebarContainer -->
