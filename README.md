ve_standalone
=============

A Standalone Vector Editor

How to use
------
The following example displays the genbank file `sequenceGB`.

```
var sequence = VE.Sequence.fromGenbank(sequenceGB);
var vectorEditor = new VE.VectorEditor({
	renderTo: $('body'),
	sequence: sequence,
});
```

