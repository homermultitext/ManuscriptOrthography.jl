var documenterSearchIndex = {"docs":
[{"location":"apis/#API-Documentation","page":"API documentation","title":"API Documentation","text":"","category":"section"},{"location":"apis/#Exported","page":"API documentation","title":"Exported","text":"","category":"section"},{"location":"apis/","page":"API documentation","title":"API documentation","text":"codepoints\ntokentypes","category":"page"},{"location":"apis/#Orthography.codepoints","page":"API documentation","title":"Orthography.codepoints","text":"Generic function to retrieve list of codepoints for an OrthographicSystem.\n\ncodepoints(ortho)\n\n\n\n\n\n\nImplement codepoints function for SimpleAscii.\n\ncodepoints(ortho)\n\n\n\n\n\n\nImplement Orthography's codepoints functions for LiteraryGreekOrthography.\n\ncodepoints(ortho)\n\n\n\n\n\n\nImplement Orthography's codepoints function.\n\ncodepoints(ortho)\n\n\n\n\n\n\n","category":"function"},{"location":"apis/#Orthography.tokentypes","page":"API documentation","title":"Orthography.tokentypes","text":"Generic function to retrieve a list of tokentypes for an OrthographicSystem.\n\n\n\n\n\nImplement tokentypes function for SimpleAscii.\n\ntokentypes(ortho)\n\n\n\n\n\n\nImplement Orthography's tokentypes functions for LiteraryGreekOrthography.\n\ntokentypes(ortho)\n\n\n\n\n\n\nImplement Orthography's tokentypes function for AtticOrthography.\n\ntokentypes(ortho)\n\n\n\n\n\n\n","category":"function"},{"location":"apis/#Internals","page":"API documentation","title":"Internals","text":"","category":"section"},{"location":"apis/","page":"API documentation","title":"API documentation","text":"ManuscriptOrthography.tokenizeMSGreek\nManuscriptOrthography.splitPunctuation","category":"page"},{"location":"apis/#ManuscriptOrthography.tokenizeMSGreek","page":"API documentation","title":"ManuscriptOrthography.tokenizeMSGreek","text":"Tokenize a string in orthography of HMT Greek MSS.\n\ntokenizeMSGreek(s)\n\n\n\n\n\n\n","category":"function"},{"location":"apis/#ManuscriptOrthography.splitPunctuation","page":"API documentation","title":"ManuscriptOrthography.splitPunctuation","text":"Split off any trailing punctuation and return an Array of leading string + trailing punctuation.\n\nsplitPunctuation(s)\n\n\n\n\n\n\n","category":"function"},{"location":"#ManuscriptOrthography.jl","page":"Home","title":"ManuscriptOrthography.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package extends the PolytonicGreek type with additional punctuation symbols.  (See documentation for the current version of PolytonicGreek.)","category":"page"},{"location":"#Manuscript-punctuation","page":"Home","title":"Manuscript punctuation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The ManuscriptOrthography module includes a number of punctuation characters that are not valid in the standard print orthography of the PolytonicGreek module.  ","category":"page"},{"location":"","page":"Home","title":"Home","text":"⁑  (Unicode \\x2051, \"two asterisks aligned veritically\"), colloquially \"the fishtail,\" marks the end of a unit, and is standard punctuation to indicate the end of a scholion.\n‡ (Unicode \\x2021, \"double dagger\") marks the beginning of a major section, such as a new book of the Iliad.\n¶ (Unicode \\x00B6, \"pilcrow sign\") occurs in the middle of an extended prose section to mark the beginning of a minor or sub-division.","category":"page"},{"location":"#Manuscript-\"accents\"-(colon?)","page":"Home","title":"Manuscript \"accents\" (colon?)","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"⸌ (Unicode \\x2e0c, \"left raised omission bracket\") encodes a mark that resembles a second grave accent.  Its usage is uncertain. It occurs primarily in μὲ⸌ν or δὲ⸌, and may mark some kind of syntactic colon.","category":"page"},{"location":"#Examples-with-transcriptions","page":"Home","title":"Examples with transcriptions","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Example Transcription reference\n(Image: ) ‡ πρόκλου Venetus A manuscript, folio 1 recto\n(Image: ) ¶ ἑλλανικὸς δὲ Venetus A manuscript, folio 1 recto\n(Image: ) περισσῶς τῷ κέαρι ⁑ Venetus B manuscript, folio 52 recto\n(Image: ) οἱ δὲ⸌ Venetus B manuscript, folio 52 recto","category":"page"},{"location":"","page":"Home","title":"Home","text":"Linked references highlight the example in context on a full manuscript page, using the Homer Multitext project's Image Citation Tool.","category":"page"}]
}
