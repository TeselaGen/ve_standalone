(function(){

if(typeof VE.rail !== 'object') { VE.rail = {}; }




VE.rail.OrfRenderer = {

	DISTANCE_FROM_RAIL: 15,
	DISTANCE_BETWEEN_ORFS: 5,
	ORF_FRAME_COLOR: ["#FF0000", "#31B440", "#3366CC"],

	
	drawOrfs: function(railContainer) {
		var me = this;

		function getOrfColor(annot) {
			return me.ORF_FRAME_COLOR[Math.abs(annot.get('frame'))];
		};

		var orfs = railContainer.model.get('orfs');
		var seqLen = railContainer.model.get('sequence').length;

		var railWidth = railContainer.railWidth;


		var orfLines = railContainer.orfSVG.selectAll('path.undefined_class')
			.data(orfs)
			.enter().append('svg:path')
			.attr('stroke', getOrfColor)
			.attr("fill", "none")
			.attr('d', function(orf, i) {
				var start = orf.get('start');
				var end = orf.get('end');
				
				var path;
				if(start <= end) {
					
					var startPos = start / seqLen * railWidth;
					var endPos = end / seqLen * railWidth;

					var y = me.getOrfOffset(railContainer, i);

					path = 'M' + startPos + ' ' + y + ' ' +
							'L' + endPos + ' ' + y;

				} else {
					throw new Error('TODO');
				}

				return path;
			});

		var startCodonData = [];
		for(var i=0,ii=orfs.length;i<ii;i++) {
			var orf = orfs[i];
			var a = orf.get('startCodons');
			for(var j=0;j<a.length;j++) {
				startCodonData.push({
					bp: a[j],
					orfIndex: i,
				});
			}
		}

		var startCodons = railContainer.orfSVG.selectAll('circle.undefined_class')
			.data(startCodonData)
			.enter().append('svg:circle')
			.attr('fill', function(d, i) {
				return getOrfColor(orfs[d.orfIndex]);
			})
			.attr('cx', function(d, i) {
				return d.bp / seqLen * railWidth;
			})
			.attr('cy', function(d, i) {
				return me.getOrfOffset(railContainer, d.orfIndex);
			})
			.attr("r", 2);



		var baseArrowD = "M 0 4.5 L 12 0 L 0 -4.5 Z";
		var _arrowScale = 2/3;

		function createArrowD(orfRadius) {
			return "M 0 " + (_arrowScale*4.5-orfRadius) +
					" L "+(12*_arrowScale)+" " + (-orfRadius) +
					" L 0 " + (-_arrowScale*4.5-orfRadius) + " Z";
		}

		railContainer.orfSVG.selectAll('path.undefined_class')
			.data(orfs)
			.enter().append('svg:path')
			.attr("fill", getOrfColor)
			.attr('d', function(orf, i) {
				var strand = orf.get('strand');
				var start = orf.get('start');
				var end = orf.get('end');

				var startPos = start / seqLen * railWidth;
				var endPos = end / seqLen * railWidth;
				var orfOffset = me.getOrfOffset(railContainer, i);

				var path;
				if(strand === 1) {
					path = 'M' + (endPos) + ' ' + (_arrowScale*4.5 + orfOffset) +
							'L' + (12*_arrowScale + endPos) + ' ' + (orfOffset) +
							'L' + (endPos) + ' ' + (-_arrowScale*4.5 + orfOffset) + 'Z';
				} else {
					path = 'M' + (startPos) + ' ' + (_arrowScale*4.5 + orfOffset) +
							'L' + (-12*_arrowScale + startPos) + ' ' + (orfOffset) +
							'L' + (startPos) + ' ' + (-_arrowScale*4.5 + orfOffset) + 'Z';
				}

				return path;
			});



	},


	getOrfOffset: function(railContainer, i) {
		var alignIndex = railContainer.orfsAlignMap[i];
		return - (this.DISTANCE_FROM_RAIL + 
					railContainer.getAlignmentOffset() + alignIndex * this.DISTANCE_BETWEEN_ORFS);
		// var alignIndex = railContainer.orfsAlignMap[i];
		// return railContainer.railRadius + this.DISTANCE_FROM_RAIL + 
		// 		railContainer.getAlignmentOffset() + alignIndex * this.DISTANCE_BETWEEN_ORFS;
	},






};














































































})();