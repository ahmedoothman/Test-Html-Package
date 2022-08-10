const startRequets = async () => {
  try {
    const response = await axios.get(
      `http://app1.helwan.edu.eg/EngHelwan/HasasnUpMview.asp?StdCode=12942`
    );
    console.log('--> ' + response.data);
  } catch (error) {
    console.log('\nError while the requests');
    console.log('\n' + error);
  }
};
startRequets();
