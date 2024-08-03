function findNeedle(haystack) {
    const position = haystack.indexOf("needle");
    return position !== -1 ? `found the needle at position ${position}` : false;
  }

  console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))