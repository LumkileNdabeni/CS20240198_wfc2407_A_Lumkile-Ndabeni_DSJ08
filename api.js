export async function getVans(id) { 
    const url = id ? `/api/vans/${id}` : "/api/vans"; // Fixed template literal syntax
    const res = await fetch(url);
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        };
    }
    const data = await res.json();
    return data.vans;
}

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"; // Fixed template literal syntax
    const res = await fetch(url);
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        };
    }
    const data = await res.json();
    return data.vans;
}

export async function loginUser(creds) {
    const res = await fetch("/api/login", {
        method: "POST", // Fixed to uppercase (conventional style)
        headers: { "Content-Type": "application/json" }, // Added headers to indicate JSON body
        body: JSON.stringify(creds)
    });
    const data = await res.json();

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        };
    }

    return data;
}
