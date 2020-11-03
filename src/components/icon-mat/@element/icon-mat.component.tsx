import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';

import { UniColor, UniIconDefault, UniSize } from '../../../models';

@Component({ tag: 'uni-icon-mat' })
export class UniIconMatComponent implements ComponentInterface {
  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: UniColor = UniIconDefault.color as UniColor;

  @Prop({ reflect: true }) size: UniSize = UniIconDefault.size as UniSize;

  @Prop({ reflect: true }) rotate: boolean = false;

  @Prop({ reflect: true }) degree: number;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  render(): VNode {
    const { color, size, rotate, degree, speed, steps } = this;
    const props = { color, size, rotate, degree, speed, steps };
    const UniIconTag = `uni-icon-mat-${this.name}`;

    return (
      <UniIconTag {...props}>
        <slot />
      </UniIconTag>
    );

    // case 'add_shopping_cart':
    //   return <uni-icon-add-shopping-cart-mat/>;
    // case 'album':
    //   return <uni-icon-album-mat/>;
    // case 'arrow_drop_up':
    //   return <uni-icon-arrow-drop-up-mat/>;
    // case 'bubble_chart':
    //   return <uni-icon-bubble-chart-mat/>;
    // case 'call_to_action':
    //   return <uni-icon-call-to-action-mat/>;
    // case 'check_box':
    //   return <uni-icon-check-box-mat/>;
    // case 'chevron_right':
    //   return <uni-icon-chevron-right-mat/>;
    // case 'code':
    //   return <uni-icon-code-mat/>;
    // case 'close':
    //   return <uni-icon-close-mat/>;
    // case 'compare_arrows':
    //   return <uni-icon-compare-arrows-mat/>;
    // case 'dashboard':
    //   return <uni-icon-dashboard-mat/>;
    // case 'dynamic_feed':
    //   return <uni-icon-dynamic-feed-mat/>;
    // case 'emoji_flags':
    //   return <uni-icon--mat/>;
    // case 'favorite':
    //   return <uni-icon-favorite-mat/>;
    // case 'fiber_smart_record':
    //   return <uni-icon-fiber-smart-record-mat/>;
    // case 'filter_none':
    //   return <uni-icon-filter-none-mat/>;
    // case 'format-list-bulleted':
    //   return <uni-icon-format-list-bulleted-mat/>;
    // case 'github':
    //   return <uni-icon-github-mat/>;
    // case 'grid_on':
    //   return <uni-icon-grid-on-mat/>;
    // case 'highlight_alt':
    //   return <uni-icon-highlight-alt-mat/>;
    // case 'home':
    //   return <uni-icon-home-mat/>;
    // case 'http':
    //   return <uni-icon-http-mat/>;
    // case 'info':
    //   return <uni-icon-info-mat/>;
    // case 'language':
    //   return <uni-icon-language-mat/>;
    // case 'layers':
    //   return <uni-icon-layers-mat/>;
    // case 'lens':
    //   return <uni-icon-lens-mat/>;
    // case 'link':
    //   return <uni-icon-link-mat/>;
    // case 'menu':
    //   return <uni-icon-menu-mat/>;
    // case 'menu_open':
    //   return <uni-icon-menu-open-mat/>;
    // case 'open_with':
    //   return <uni-icon-open-with-mat/>;
    // case 'person_add':
    //   return <uni-icon-person-add-mat/>;
    // case 'playlist_add_check':
    //   return <uni-icon-playlist-add-check-mat/>;
    // case 'radio_button_checked':
    //   return <uni-icon-radio-button-checked-mat/>;
    // case 'router':
    //   return <uni-icon-router-mat/>;
    // case 'smart_button':
    //   return <uni-icon-smart-button-mat/>;
    // case 'storage':
    //   return <uni-icon-storage-mat/>;
    // case 'tab_unselected':
    //   return <uni-icon-tab-unselected-mat/>;
    // case 'text_fields':
    //   return <uni-icon-text-fields-mat/>;
    // case 'toggle_on':
    //   return <uni-icon-toggle-on-mat/>;
    // case 'translate':
    //   return <uni-icon-translate-mat/>;
    // case 'view_sidebar':
    //   return <uni-icon-view-sidebar-mat/>;
    // case 'visibility':
    //   return <uni-icon-visibility-mat/>;
    // case 'waves':
    //   return <uni-icon-waves-mat/>;
    // case 'web':
    //   return <uni-icon-web-mat/>;
    // case 'web_asset':
    //   return <uni-icon-web-asset-mat/>;
    // case 'wysiwyg':
    //   return <uni-icon-wysiwyg-mat/>;
  }
}
