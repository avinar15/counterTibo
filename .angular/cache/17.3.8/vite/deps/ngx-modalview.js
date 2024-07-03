import {
  CommonModule,
  NgClass,
  NgStyle
} from "./chunk-KALKIOQJ.js";
import {
  ApplicationRef,
  BehaviorSubject,
  Component,
  ComponentFactoryResolver$1,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Observable,
  Optional,
  Output,
  Renderer2,
  Subject,
  ViewChild,
  ViewContainerRef,
  filter,
  fromEvent,
  map,
  of,
  setClassMetadata,
  switchMap,
  takeUntil,
  ɵɵNgOnChangesFeature,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresolveDocument,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵviewQuery
} from "./chunk-N73XIWWO.js";
import {
  __async,
  __spreadValues
} from "./chunk-X6JV76XL.js";

// node_modules/ngx-modalview/fesm2022/ngx-modalview.mjs
var _c0 = ["viewContainer"];
var _c1 = ["wrapper"];
var _c2 = () => ({
  display: "block"
});
function NgxModalWrapperComponent_ng_template_2_Template(rf, ctx) {
}
function NgxModalHolderComponent_ng_template_0_Template(rf, ctx) {
}
var DefaultNgxModalOptionConfig = new InjectionToken("default-ngx-modal.config");
var defaultNgxModalOptions = {
  closeOnEscape: false,
  closeOnClickOutside: false,
  bodyClass: "modal-open",
  wrapperDefaultClasses: "modal fade-anim",
  wrapperClass: "in",
  draggableClass: "draggable",
  animationDuration: 300,
  autoFocus: false,
  draggable: false
};
var NgxModalWrapperComponent = class _NgxModalWrapperComponent {
  resolver;
  /**
   * Target viewContainer to insert modal content component
   */
  viewContainer;
  /**
   * Link wrapper DOM element
   */
  wrapper;
  /**
   * Wrapper modal and fade classes
   */
  modalClasses = "modal fade-anim";
  /**
   * Dialog content componet
   * @type {NgxModalComponent}
   */
  content;
  /**
   * Click outside callback
   */
  clickOutsideCallback;
  /**
   * Constructor
   * @param {ComponentFactoryResolver} resolver
   */
  constructor(resolver) {
    this.resolver = resolver;
  }
  ngOnDestroy() {
    if (this.clickOutsideCallback) {
      const containerEl = this.wrapper.nativeElement;
      containerEl.removeEventListener("click", this.clickOutsideCallback, false);
      this.clickOutsideCallback = null;
    }
  }
  /**
   * Adds content modal component to wrapper
   * @param {Type<NgxModalComponent>} component
   * @return {NgxModalComponent}
   */
  addComponent(component) {
    const factory = this.resolver.resolveComponentFactory(component);
    const injector = Injector.create([], this.viewContainer.injector);
    const componentRef = factory.create(injector);
    this.viewContainer.insert(componentRef.hostView);
    this.content = componentRef.instance;
    this.content.wrapper = this.wrapper;
    return {
      ref: componentRef,
      component: this.content
    };
  }
  /**
   * Configures the function to call when you click on background of a modal but not the contents
   * @param callback
   */
  onClickOutsideModalContent(callback) {
    const containerEl = this.wrapper.nativeElement;
    this.clickOutsideCallback = (event) => {
      if (event.target === containerEl) {
        callback();
      }
    };
    containerEl.addEventListener("click", this.clickOutsideCallback, false);
  }
  static ɵfac = function NgxModalWrapperComponent_Factory(t) {
    return new (t || _NgxModalWrapperComponent)(ɵɵdirectiveInject(ComponentFactoryResolver$1));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NgxModalWrapperComponent,
    selectors: [["ngx-modal-wrapper"]],
    viewQuery: function NgxModalWrapperComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 7, ViewContainerRef);
        ɵɵviewQuery(_c1, 7, ElementRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.viewContainer = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.wrapper = _t.first);
      }
    },
    decls: 4,
    vars: 3,
    consts: [["wrapper", ""], ["viewContainer", ""], ["role", "dialog", 3, "ngClass", "ngStyle"]],
    template: function NgxModalWrapperComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 2, 0);
        ɵɵtemplate(2, NgxModalWrapperComponent_ng_template_2_Template, 0, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("ngClass", ctx.modalClasses)("ngStyle", ɵɵpureFunction0(2, _c2));
      }
    },
    dependencies: [NgClass, NgStyle],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxModalWrapperComponent, [{
    type: Component,
    args: [{
      selector: "ngx-modal-wrapper",
      template: `
    <div #wrapper [ngClass]="modalClasses" [ngStyle]="{ display: 'block' }" role="dialog">
      <ng-template #viewContainer></ng-template>
    </div>
  `
    }]
  }], function() {
    return [{
      type: ComponentFactoryResolver$1
    }];
  }, {
    viewContainer: [{
      type: ViewChild,
      args: ["viewContainer", {
        read: ViewContainerRef,
        static: true
      }]
    }],
    wrapper: [{
      type: ViewChild,
      args: ["wrapper", {
        read: ElementRef,
        static: true
      }]
    }]
  });
})();
var DraggableDirective = class _DraggableDirective {
  host;
  zone;
  renderer;
  dragHandle;
  dragTarget;
  dragEnabled = false;
  set dialogDragOffset(offset) {
    this.reset(offset);
  }
  dragged = new EventEmitter();
  /** Element to be dragged */
  target;
  /** Drag handle */
  handle;
  delta = {
    x: 0,
    y: 0
  };
  offset = {
    x: 0,
    y: 0
  };
  enabled = true;
  destroy$ = new Subject();
  constructor(host, zone, renderer) {
    this.host = host;
    this.zone = zone;
    this.renderer = renderer;
  }
  ngAfterViewInit() {
    if (!this.enabled) {
      return;
    }
    this.init();
  }
  ngOnChanges() {
    if (!this.enabled && this.dragEnabled && this.dragTarget) {
      this.enabled = true;
      if (this.handle) {
        this.renderer.setStyle(this.handle, "cursor", "move");
      } else if (this.enabled) {
        this.init();
      }
    }
    if (!this.dragEnabled) {
      this.enabled = false;
      if (this.handle) {
        this.renderer.setStyle(this.handle, "cursor", "");
      }
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
  }
  reset(offset) {
    const defaultValues = {
      x: 0,
      y: 0
    };
    this.offset = __spreadValues(__spreadValues({}, defaultValues), offset);
    this.delta = __spreadValues({}, defaultValues);
    this.translate();
  }
  setupEvents() {
    this.zone.runOutsideAngular(() => {
      const mousedown$ = fromEvent(this.handle, "mousedown");
      const mousemove$ = fromEvent(document, "mousemove");
      const mouseup$ = fromEvent(document, "mouseup");
      const mousedrag$ = mousedown$.pipe(filter(() => this.enabled), map((event) => ({
        startX: event.clientX,
        startY: event.clientY
      })), switchMap(({
        startX,
        startY
      }) => mousemove$.pipe(map((event) => {
        event.preventDefault();
        this.delta = {
          x: event.clientX - startX,
          y: event.clientY - startY
        };
      }), takeUntil(mouseup$))), takeUntil(this.destroy$));
      mousedrag$.subscribe(() => {
        if (this.delta.x === 0 && this.delta.y === 0) {
          return;
        }
        this.translate();
      });
      mouseup$.pipe(
        filter(() => this.enabled),
        /** Only emit change if the element has moved */
        filter(() => this.delta.x !== 0 || this.delta.y !== 0),
        takeUntil(this.destroy$)
      ).subscribe(() => {
        this.offset.x += this.delta.x;
        this.offset.y += this.delta.y;
        this.dragged.emit(this.offset);
        this.delta = {
          x: 0,
          y: 0
        };
      });
    });
  }
  translate() {
    if (this.target) {
      this.zone.runOutsideAngular(() => {
        requestAnimationFrame(() => {
          const transform = `translate(${this.offset.x + this.delta.x}px, ${this.offset.y + this.delta.y}px)`;
          this.renderer.setStyle(this.target, "transform", transform);
        });
      });
    }
  }
  /**
   * Init the directive
   */
  init() {
    if (!this.dragTarget) {
      throw new Error("You need to specify the drag target");
    }
    this.handle = this.dragHandle instanceof Element ? this.dragHandle : typeof this.dragHandle === "string" && this.dragHandle ? document.querySelector(this.dragHandle) : this.host.nativeElement;
    if (this.handle && this.enabled) {
      this.renderer.addClass(this.handle, "handle");
    }
    this.target = this.dragTarget instanceof HTMLElement ? this.dragTarget : document.querySelector(this.dragTarget);
    this.setupEvents();
    this.translate();
  }
  static ɵfac = function DraggableDirective_Factory(t) {
    return new (t || _DraggableDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DraggableDirective,
    selectors: [["", "dialogDraggable", ""]],
    inputs: {
      dragHandle: "dragHandle",
      dragTarget: "dragTarget",
      dragEnabled: "dragEnabled",
      dialogDragOffset: "dialogDragOffset"
    },
    outputs: {
      dragged: "dragged"
    },
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DraggableDirective, [{
    type: Directive,
    args: [{
      selector: "[dialogDraggable]"
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: Renderer2
    }];
  }, {
    dragHandle: [{
      type: Input
    }],
    dragTarget: [{
      type: Input
    }],
    dragEnabled: [{
      type: Input
    }],
    dialogDragOffset: [{
      type: Input
    }],
    dragged: [{
      type: Output
    }]
  });
})();
var NgxModalHolderComponent = class _NgxModalHolderComponent {
  resolver;
  renderer;
  ngZone;
  defaultNgxModalOptions;
  /**
   * Target viewContainer to insert modals
   */
  viewContainer;
  /**
   * modal collection, maintained by addModal and removeModal
   * @type {Array<NgxModalComponent> }
   */
  modals = [];
  /**
   * if auto focus is on and no element focused, store it here to be restored back after close
   */
  previousActiveElement = null;
  /**
   * Constructor
   * @param {ComponentFactoryResolver} resolver
   * @param renderer
   * @param ngZone
   * @param defaultNgxModalOptions
   */
  constructor(resolver, renderer, ngZone, defaultNgxModalOptions2) {
    this.resolver = resolver;
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.defaultNgxModalOptions = defaultNgxModalOptions2;
  }
  /**
   * Configures then adds modal to the modals array, and populates with data passed in
   * @param {Type<NgxModalComponent>} component
   * @param {object?} data
   * @param {NgxModalOptionsOverrides?} options
   * @return {Observable<*>}
   */
  addModal(component, data, options) {
    if (!this.viewContainer) {
      return of(null);
    }
    const factory = this.resolver.resolveComponentFactory(NgxModalWrapperComponent);
    const componentRef = this.viewContainer.createComponent(factory);
    const modalWrapper = componentRef.instance;
    const {
      ref: _componentRef,
      component: _component
    } = modalWrapper.addComponent(component);
    _component.options = options = Object.assign({}, this.defaultNgxModalOptions, options);
    modalWrapper.modalClasses = options.wrapperDefaultClasses;
    this.modals.push(_component);
    this.wait().then(() => {
      this.toggleWrapperClass(modalWrapper.wrapper, options.wrapperClass);
      this.toggleBodyClass(options.bodyClass);
      if (options.draggable) {
        this.setDraggable(_componentRef, options);
      }
      this.wait(options.animationDuration).then(() => {
        this.autoFocusFirstElement(_component.wrapper, options.autoFocus);
        _component.markAsReady();
      });
    });
    _component.onClosing((modal) => this.removeModal(modal));
    this.configureCloseOnClickOutside(modalWrapper);
    _component.mapDataObject(data);
    return _component.setupObserver();
  }
  /**
   * triggers components close function
   * to take effect
   * @returns {Promise<void>}
   * @param closingModal
   */
  removeModal(closingModal) {
    return __async(this, null, function* () {
      const options = closingModal.options;
      this.toggleWrapperClass(closingModal.wrapper, options.wrapperClass);
      return this.wait(options.animationDuration).then(() => {
        this.removeModalFromArray(closingModal);
        this.toggleBodyClass(options.bodyClass);
        this.restorePreviousFocus();
      });
    });
  }
  /**
   * Instructs all open modals to
   */
  removeAllModals() {
    return Promise.all(this.modals.map((modal) => this.removeModal(modal)));
  }
  /**
   * Bind a body class 'modal-open' to a condition of modals in pool > 0
   * @param bodyClass - string to add and remove from body in document
   */
  toggleBodyClass(bodyClass) {
    if (!bodyClass) {
      return;
    }
    const body = document.getElementsByTagName("body")[0];
    const bodyClassItems = bodyClass.split(" ");
    if (!this.modals.length) {
      body.classList.remove(...bodyClassItems);
    } else {
      body.classList.add(...bodyClassItems);
    }
  }
  /**
   * if the option to close on background click is set, then hook up a callback
   * @param modalWrapper
   */
  configureCloseOnClickOutside(modalWrapper) {
    modalWrapper.onClickOutsideModalContent(() => {
      if (modalWrapper.content.options.closeOnClickOutside) {
        modalWrapper.content.close();
      }
    });
  }
  /**
   * Auto focus o the first element if autofocus is on
   * @param componentWrapper
   * @param autoFocus
   */
  autoFocusFirstElement(componentWrapper, autoFocus) {
    if (autoFocus) {
      const focusable = componentWrapper.nativeElement.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusable && focusable.length) {
        this.previousActiveElement = document.activeElement;
        focusable[0].focus();
      }
    }
  }
  /**
   * Restores the last focus is there was one
   */
  restorePreviousFocus() {
    if (this.previousActiveElement) {
      this.previousActiveElement.focus();
      this.previousActiveElement = null;
    }
  }
  /**
   * Configure the adding and removal of a wrapper class - predominantly animation focused
   * @param modalWrapperEl
   * @param wrapperClass
   */
  toggleWrapperClass(modalWrapperEl, wrapperClass) {
    const wrapperClassList = modalWrapperEl.nativeElement.classList;
    const wrapperClassItems = wrapperClass.split(" ");
    if (wrapperClassList.toString().indexOf(wrapperClass) !== -1) {
      wrapperClassList.remove(...wrapperClassItems);
    } else {
      wrapperClassList.add(...wrapperClassItems);
    }
  }
  /**
   * Enables the drag option on the modal if the options have it enabled
   * @param component
   * @param options
   * @private
   */
  setDraggable(component, options) {
    const draggableDirective = new DraggableDirective(component.location, this.ngZone, this.renderer);
    draggableDirective.dragTarget = component.location.nativeElement;
    draggableDirective.dragHandle = component.instance.handle ? component.instance.handle.nativeElement : void 0;
    draggableDirective.ngAfterViewInit();
    component.location.nativeElement.classList.add(options.draggableClass);
  }
  /**
   * Helper function for a more readable timeout
   * @param ms
   */
  wait(ms = 0) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), ms);
    });
  }
  /**
   * Instructs the holder to remove the modal and
   * removes this component from the collection
   * @param {NgxModalComponent} component
   */
  removeModalFromArray(component) {
    const index = this.modals.indexOf(component);
    if (index > -1) {
      this.viewContainer.remove(index);
      this.modals.splice(index, 1);
    }
  }
  static ɵfac = function NgxModalHolderComponent_Factory(t) {
    return new (t || _NgxModalHolderComponent)(ɵɵdirectiveInject(ComponentFactoryResolver$1), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(DefaultNgxModalOptionConfig));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NgxModalHolderComponent,
    selectors: [["ngx-modal-holder"]],
    viewQuery: function NgxModalHolderComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 7, ViewContainerRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.viewContainer = _t.first);
      }
    },
    decls: 2,
    vars: 0,
    consts: [["viewContainer", ""]],
    template: function NgxModalHolderComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, NgxModalHolderComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxModalHolderComponent, [{
    type: Component,
    args: [{
      selector: "ngx-modal-holder",
      template: "<ng-template #viewContainer></ng-template>"
    }]
  }], function() {
    return [{
      type: ComponentFactoryResolver$1
    }, {
      type: Renderer2
    }, {
      type: NgZone
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [DefaultNgxModalOptionConfig]
      }]
    }];
  }, {
    viewContainer: [{
      type: ViewChild,
      args: ["viewContainer", {
        read: ViewContainerRef,
        static: true
      }]
    }]
  });
})();
var NgxModalServiceConfig = class {
  container = null;
};
var NgxModalService = class _NgxModalService {
  resolver;
  applicationRef;
  injector;
  /**
   * Placeholder of modals
   * @type {NgxModalHolderComponent}
   */
  modalHolderComponent;
  /**
   * HTML container for modals
   * type {HTMLElement | string}
   */
  _container;
  constructor(resolver, applicationRef, injector, config) {
    this.resolver = resolver;
    this.applicationRef = applicationRef;
    this.injector = injector;
    if (config) {
      this.container = config.container;
    }
  }
  /**
   * Accessor for contain - will auto generate from string
   * if needed or default to the root element if nothing was set
   */
  set container(c) {
    this._container = c;
  }
  get container() {
    if (typeof this._container === "string") {
      this._container = document.getElementById(this._container);
    }
    if (!this._container && this.applicationRef["components"].length) {
      const componentRootViewContainer = this.applicationRef["components"][0];
      this.container = componentRootViewContainer.hostView.rootNodes[0];
    }
    if (!this._container || typeof this._container === "string") {
      this._container = document.getElementsByTagName("body")[0];
    }
    return this._container;
  }
  /**
   * Creates and add to DOM modal holder component.
   *
   * @returns {NgxModalHolderComponent}
   */
  createSimpleModalHolder() {
    const componentFactory = this.resolver.resolveComponentFactory(NgxModalHolderComponent);
    const componentRef = componentFactory.create(this.injector);
    const componentRootNode = componentRef.hostView.rootNodes[0];
    this.applicationRef.attachView(componentRef.hostView);
    componentRef.onDestroy(() => {
      this.applicationRef.detachView(componentRef.hostView);
    });
    this.container.appendChild(componentRootNode);
    return componentRef.instance;
  }
  /**
   * Adds modal
   *
   * @param {Type<NgxModalComponent<T, T1>>} component
   * @param {T?} data
   * @param {NgxModalOptionsOverrides?} options
   *
   * @returns {Observable<T1>}
   */
  addModal(component, data, options) {
    if (!this.modalHolderComponent) {
      this.modalHolderComponent = this.createSimpleModalHolder();
    }
    return this.modalHolderComponent.addModal(component, data, options);
  }
  /**
   * Hides and removes modal from DOM, resolves promise when fully removed
   *
   * @param {NgxModalComponent} component
   *
   * @returns {Promise<{}>}
   */
  removeModal(component) {
    if (!this.modalHolderComponent) {
      return Promise.resolve({});
    }
    return this.modalHolderComponent.removeModal(component);
  }
  /**
   * Closes all modals, resolves promise when they're fully removed
   *
   * @returns {Promise<{}>}
   */
  removeAll() {
    if (!this.modalHolderComponent) {
      return Promise.resolve({});
    }
    return this.modalHolderComponent.removeAllModals();
  }
  static ɵfac = function NgxModalService_Factory(t) {
    return new (t || _NgxModalService)(ɵɵinject(ComponentFactoryResolver$1), ɵɵinject(ApplicationRef), ɵɵinject(Injector), ɵɵinject(NgxModalServiceConfig, 8));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _NgxModalService,
    factory: _NgxModalService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxModalService, [{
    type: Injectable
  }], function() {
    return [{
      type: ComponentFactoryResolver$1
    }, {
      type: ApplicationRef
    }, {
      type: Injector
    }, {
      type: NgxModalServiceConfig,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();
function NgxModalServiceFactory(resolver, applicationRef, injector, options) {
  return new NgxModalService(resolver, applicationRef, injector, options);
}
var NgxModalView = class _NgxModalView {
  static forRoot(config, defaultModalOptions) {
    return {
      ngModule: _NgxModalView,
      providers: [{
        provide: NgxModalServiceConfig,
        useValue: config
      }, {
        provide: NgxModalService,
        useFactory: NgxModalServiceFactory,
        deps: [ComponentFactoryResolver$1, ApplicationRef, Injector, NgxModalServiceConfig]
      }, {
        provide: DefaultNgxModalOptionConfig,
        useValue: defaultModalOptions || defaultNgxModalOptions
      }]
    };
  }
  constructor() {
  }
  static ɵfac = function NgxModalView_Factory(t) {
    return new (t || _NgxModalView)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _NgxModalView,
    declarations: [NgxModalHolderComponent, NgxModalWrapperComponent, DraggableDirective],
    imports: [CommonModule]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [NgxModalService, {
      provide: DefaultNgxModalOptionConfig,
      useValue: defaultNgxModalOptions
    }],
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxModalView, [{
    type: NgModule,
    args: [{
      declarations: [NgxModalHolderComponent, NgxModalWrapperComponent, DraggableDirective],
      providers: [NgxModalService, {
        provide: DefaultNgxModalOptionConfig,
        useValue: defaultNgxModalOptions
      }],
      imports: [CommonModule]
    }]
  }], function() {
    return [];
  }, null);
})();
var NgxModalComponent = class _NgxModalComponent {
  /**
   * Observer to return result from modal
   */
  observer;
  /**
   * Drag handle
   */
  handle;
  /**
   * Dialog result
   * @type {T1}
   */
  result;
  /**
   * Dialog wrapper (modal placeholder)
   */
  wrapper;
  /**
   * ref of options for this component
   */
  options;
  /**
   * ready$ is when all animations and focusing have comleted
   */
  _ready$ = new BehaviorSubject(false);
  /**
   * Callback to the holders close function
   */
  closerCallback = () => Promise.resolve();
  /**
   * Constructor
   */
  constructor() {
  }
  /**
   * Maps your object passed in the creation to fields in your own Dialog classes
   * @param {T} data
   */
  mapDataObject(data) {
    data = data || {};
    const keys = Object.keys(data);
    for (let i = 0, length = keys.length; i < length; i++) {
      const key = keys[i];
      if (data[key] && this[key] && typeof data[key] === "object" && typeof this[key] === "object") {
        Object.assign(this[key], data[key]);
      } else {
        this[key] = data[key];
      }
    }
  }
  /**
   * Setup observer
   * @return {Observable<T1>}
   */
  setupObserver() {
    return Observable.create((observer) => {
      this.observer = observer;
      return () => {
        this.close();
      };
    });
  }
  /**
   * Defines what happens when close is called - default this
   * will just call the default remove modal process. If overridden
   * must include
   * @param callback
   */
  onClosing(callback) {
    this.closerCallback = callback;
  }
  /**
   * Closes modal
   */
  close() {
    return this.closerCallback(this).then((v) => {
      if (this.observer) {
        this.observer.next(this.result);
        this.observer.complete();
      }
      return v;
    });
  }
  /**
   * keypress binding ngx way
   * @param evt
   */
  onKeydownHandler(evt) {
    if (this.options && this.options.closeOnEscape) {
      this.close();
    }
  }
  get ready$() {
    return this._ready$.asObservable();
  }
  markAsReady() {
    this._ready$.next(true);
  }
  static ɵfac = function NgxModalComponent_Factory(t) {
    return new (t || _NgxModalComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NgxModalComponent,
    selectors: [["ng-component"]],
    hostBindings: function NgxModalComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("keydown.escape", function NgxModalComponent_keydown_escape_HostBindingHandler($event) {
          return ctx.onKeydownHandler($event);
        }, false, ɵɵresolveDocument);
      }
    },
    decls: 0,
    vars: 0,
    template: function NgxModalComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxModalComponent, [{
    type: Component,
    args: [{
      template: ""
    }]
  }], function() {
    return [];
  }, {
    onKeydownHandler: [{
      type: HostListener,
      args: ["document:keydown.escape", ["$event"]]
    }]
  });
})();
export {
  DefaultNgxModalOptionConfig,
  DraggableDirective,
  NgxModalComponent,
  NgxModalService,
  NgxModalServiceConfig,
  NgxModalView,
  defaultNgxModalOptions
};
//# sourceMappingURL=ngx-modalview.js.map
