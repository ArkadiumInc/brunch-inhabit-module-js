import Promise               from 'pinkie';
import { InhabitModuleBase } from 'inhabit-module-base';

export class <%= name %> extends InhabitModuleBase {
  constructor(conf, deps) {
    super(conf, deps);
  }

  getTitle() {
    return '<%= name %>';
  }

  getThumbnail() {
    return '';
  }

  hasContent() {
    return true;
  }

  getContent() {
    return this.textClassificationService
      .getKeywords('alchemy')
      .then(keywords => keywords.map(word => word.values.pop()))
      .then(words => this.keywords = words)
      .then(words => this);
  }

  display(container) {
    this.$container = this.$(container[0]);
    this.render();
  }

  render() {
    this.keywords.map((word, key) => this.$container.append(
      this.$('<button class="m1">')
        .html("Keyword " + (key++))
        .click(e => alert(word))
    ));
  }

  onClick(e) {
    alert(e.target.innerHTML);
  }
}

<%= name %>.moduleName = '<%= nameMin %>';

InhabitModuleBase.publish(<%= name %>);
