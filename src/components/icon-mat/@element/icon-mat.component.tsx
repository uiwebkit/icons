import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';

import { UniColor, UniIconsMatFont, UniSize } from '../../../models';
import { UniRotateTemplate, UniThemeRotateTemplate, UniThemeTemplate } from '../../../utils';

@Component({ tag: 'uni-icon-mat' })
export class UniIconMatComponent implements ComponentInterface {

  @Prop({ reflect: true }) type: UniIconsMatFont = 'filled';

  @Prop({ reflect: true }) name!: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) rotate: boolean = false;

  @Prop({ reflect: true }) degree: number;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  render(): VNode {
    const { color, size, degree, speed, steps } = this;
    const props = { color, size, degree, speed, steps, selector: 'svg' };
    const UniIconTag = `uni-mat-${uniIconsMatTypeShort(this.type)}-${this.name}`;

    return this.rotate && (this.color || this.size)
      ? UniThemeRotateTemplate({ ...props }, <UniIconTag />)
      : this.rotate
        ? UniRotateTemplate({ ...props }, <UniIconTag />)
        : this.color || this.size
          ? UniThemeTemplate({ ...props }, <UniIconTag />)
          : <UniIconTag />;
  }
}

function uniIconsMatTypeShort(type: UniIconsMatFont): string {
  switch (type) {
    case 'filled':
      return 'f';
    case 'outlined':
      return 'o';
    case 'round':
      return 'r';
    case 'two-tone':
      return 't';
    case 'sharp':
      return 's';
    default:
      return 'f';
  }
}

// case 'add_shopping_cart'
// case 'album'
// case 'arrow_drop_up'
// case 'bubble_chart'
// case 'call_to_action'
// case 'check_box'
// case 'chevron_right'
// case 'code'
// case 'close'
// case 'compare_arrows'
// case 'dashboard'
// case 'dynamic_feed'
// case 'emoji_flags'
// case 'favorite'
// case 'fiber_smart_record'
// case 'filter_none'
// case 'format-list-bulleted'
// case 'github'
// case 'grid_on'
// case 'highlight_alt'
// case 'home'
// case 'http'
// case 'info'
// case 'language'
// case 'layers'
// case 'lens'
// case 'link'
// case 'menu'
// case 'menu_open'
// case 'open_with'
// case 'person_add'
// case 'playlist_add_check':
// case 'radio_button_checked':
// case 'router':
// case 'smart_button':
// case 'storage':
// case 'tab_unselected':
// case 'text_fields':
// case 'toggle_on':
// case 'translate':
// case 'view_sidebar':
// case 'visibility':
// case 'waves':
// case 'web':
// case 'web_asset':
// case 'wysiwyg':
