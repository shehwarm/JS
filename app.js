let str = "abcdefgggghw";

function getElements(str){
      let ans = "";


      for(let i =0; i<str.length; i++){
        let currChar = str[i];
        if(ans.indexOf(currChar) == -1){
            ans += currChar;
        }
      }

      return ans;
}

console.log(getElements(str));