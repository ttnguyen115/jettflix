export async function fetchRequests(api, urls) {
    const responses = [];
    for (const url of urls) {
      responses.push((await api.get(url)).data);
    }
    return responses;
}
