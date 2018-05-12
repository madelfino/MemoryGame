function test(data) {
  var num_words = 0;
  var num_categories = 0;
  var passed = true;
  for (id in data) {
    num_categories++;
    for (word_id in data[id].words) {
      num_words++;
      if (!data[id].words[word_id]['English'] || !data[id].words[word_id]['Thai']) {
        passed = false;
        console.log("Broken test case:");
        console.log(data[id].words[word_id]);
      }
    }
  }
  console.log("Number of categories: " + num_categories);
  console.log("Number of words: " + num_words);
  if (passed) {
    console.log("Test Passed.");
  } else {
    console.log("test Failed.")
  }
}
