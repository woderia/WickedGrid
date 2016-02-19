/**
 * Internal css classes of objects
 * @memberOf WickedGrid
 * @type {Object}
 */
WickedGrid.cl = {
  list: function(list) {
    var result = [],
        self = WickedGrid.cl;
    list.forEach(function(prop) {
      if (!self.hasOwnProperty(prop)) throw new Error('prop ' + prop + ' not found on WickedGrid.cl');
      result.push(self[prop]);
    });

    return result.join(' ');
  },
  autoFiller: 'wg-auto-filler',
  autoFillerHandle: 'wg-auto-filler-handle',
  autoFillerCover: 'wg-auto-filler-cover',
  barCorner: 'wg-bar-corner',
  barController: 'wg-bar-controller',
  barControllerChild: 'wg-bar-controller-child',
  barHelper: 'wg-bar-helper',
  barLeft: 'wg-bar-left',
  barHandleFreezeLeft: 'wg-bar-handle-freeze-left',
  barTop: 'wg-bar-top',
  barTopMenuButton: 'wg-bar-top-menu-button',
  barHandleFreezeTop: 'wg-bar-handle-freeze-top',
  chart: 'wg-chart',
  formula: 'wg-formula',
  formulaParent: 'wg-formula-parent',
  header: 'wg-header',
  fullScreen: 'wg-full-screen',
  inPlaceEdit: 'wg-in-place-edit',
  menu: 'wg-menu',
  menuFixed: 'wg-menu-fixed',
  element: 'wg-element',
  scroll: 'wg-scroll',
  sheetAdder: 'wg-sheet-adder',
  table: 'wg',
  label: 'wg-loc',
  pane: 'wg-edit-pane',
  tab: 'wg-tab',
  tabContainer: 'wg-tab-container',
  tabContainerScrollable: 'wg-tab-container-scrollable',
  tdMenu: 'wg-td-menu',
  title: 'wg-title',
  enclosure: 'wg-enclosure',
  ui: 'wg-ui'
};