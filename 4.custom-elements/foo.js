var proto = Object.create(HTMLElement.prototype);

/*
 * Custom Element Lifecycle Callbacks
 * - createdCallback
 * - attachedCallback
 * - detachedCallback
 * - attributeChangedCallback
*/
proto.createdCallback = function() {
    this.textContent = 'Hello World!';
};

proto.addMoreText = function(s) {
    this.textContent = `${this.textContent}${s}`;
};

document.registerElement('hello-element', {
    prototype: proto
});