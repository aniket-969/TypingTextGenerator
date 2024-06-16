declare module 'typingtextgenerator' {

    export  function generateWords(
        num: boolean,
        alphabets: boolean,
        characters: boolean,
        words: boolean,
        length: number
      ): string;
    
      export  function generateMajorityElement(
       
        element: string,
        count: number,
        
      ): string;
    
      export  function addarrayElementsandgenerate(
        num: boolean,
        alphabets: boolean,
        characters: boolean,
        words: boolean,
        length: number,
        array: string[] 
      ): string;
    
  
  }