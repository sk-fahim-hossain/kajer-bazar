

const singleLoader =async () =>{
    const loadedJobs = await fetch("fakeData.json");
    const jobs = await loadedJobs.json();
    return {jobs}
}

export default singleLoader;