import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class PrototypeService {

  constructor(private af: AngularFirestore) {


  }


  globalCssCompile(document: Document, globalCss) {

    const globalCssCompiled = globalCss.data;

    const elementToDel = document.getElementById('global-style-css');
    if (elementToDel) {
      elementToDel.parentNode.removeChild(elementToDel);
    }

    if (globalCssCompiled && globalCssCompiled.length > 0) {

    const head = document.head || document.getElementsByTagName('head')[0];

    const style = document.createElement('style');
    style.setAttribute('id', 'global-style-css');
    style.appendChild(document.createTextNode(globalCssCompiled));
    head.appendChild(style);
    }
  }

  getCompileContent(selectedVersion) {

    const cssCompiled = '<style>' + selectedVersion.css + '</style>';
    console.log('css compiled: ');
    console.log(cssCompiled);
    return  cssCompiled + selectedVersion.data;
  }

  delete(prototypeId) {
    return this.af.doc(`prototype/${prototypeId}`).delete();
  }

  getRemoteView() {
    return this.af.doc('prototype-remote-view/123').valueChanges();
  }


  saveToRemoteView(item) {

    item.dataCadastro = item.dataCadastro || new Date();
    return this.af.doc('prototype-remote-view/123').set(Object.assign({}, item));

  }

  getGlobalCss() {
    return this.af.doc('prototype-global-css/123').valueChanges();
  }


  saveGlobalCss(item) {

    return this.af.doc('prototype-global-css/123').set(Object.assign({}, item));

  }


  saveVersion(prototypeId, item) {

    item.dataCadastro = item.dataCadastro || new Date();
    if (!item.id || item.id === '0') {
      item.id = item.id || this.af.createId();
      return this.af.doc(`prototype/${prototypeId}/versions/${item.id}`).set(Object.assign({}, item));
    } else {
      return this.af.doc(`prototype/${prototypeId}/versions/${item.id}`).update(Object.assign({}, item));
    }
  }

  savePrototype(item) {

    item.dataCadastro = item.dataCadastro || new Date();
    if (!item.id || item.id === '0') {
      item.id = item.id || this.af.createId();
      return this.af.doc(`prototype/${item.id}`).set(Object.assign({}, item));
    } else {
      return this.af.doc(`prototype/${item.id}`).update(Object.assign({}, item));
    }
  }

  getVersionsByPrototype(prototypeId) {
    return this.af.collection(`prototype/${prototypeId}/versions`).valueChanges();
  }

  getById(id) {
    return this.af.doc(`prototype/${id}`).valueChanges();
  }

  getAll() {
    return this.af.collection('prototype').valueChanges();
  }
}
