Context = function() {
    this.doc = (document.currentScript || document._currentScript).ownerDocument;
}

Context.prototype.import = function(id) {
    return document.importNode(this.doc.querySelector(`#${id}`).content, true);
}