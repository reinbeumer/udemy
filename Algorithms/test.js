function DNAStrand(dna) {
	return dna.replace(/./g, m => 'CGAT' ['GCTA'.indexOf(m)]);
}

// console.log(DNAStrand("AAAA"));
// console.log(DNAStrand("ATTGC"));
// console.log(DNAStrand("GTAT"));
console.log(DNAStrand("ATCG"));