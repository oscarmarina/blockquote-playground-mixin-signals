import { dedupingMixin } from '@blockquote/polymer/lib/utils/mixin.js';
import { effect } from '@preact/signals-core';

export const BlockquoteMixinSignals = dedupingMixin(
  Base =>
    class BlockquoteSignals extends Base {
      performUpdate() {
        if (!this.isUpdatePending) {
          return;
        }
        this._disposeEffect?.();
        this._disposeEffect = effect(() => {
          this.isUpdatePending = true;
          super.performUpdate();
        });
      }
    },
);
