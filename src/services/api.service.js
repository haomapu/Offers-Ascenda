const apiService = {
    fetchAPI: async (req, res) => {
        const url = "";
        const response = await fetch('https://61c3deadf1af4a0017d990e7.mockapi.io/offers/near_by?lat=1.313492&lon=103.860359&rad=20', {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin', 
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer', 
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }
    
    
}

export default apiService;
