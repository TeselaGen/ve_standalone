ve_standalone
=============

A Standalone Vector Editor

How to use
------
The following example create a VectorEditor instance of the genbank file `sequenceGB`.

```js
var sequence = VE.Sequence.fromGenbank(sequenceGB);
var vectorEditor = new VE.VectorEditor({
	renderTo: $('body'),
	sequence: sequence,
});
```

