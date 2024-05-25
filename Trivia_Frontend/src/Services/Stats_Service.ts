export const getAllPlayerStats = async () => {
  const response = await fetch("http://localhost:8080/records");
  if (!response.ok) {
    throw new Error("Failed to get Player Stats");
  }
  const data = await response.json();
  return data;
};

export const postPlayerStats = async (playerStats: any) => {
  try {
    const response = await fetch("http://localhost:8080/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playerStats),
    });

    if (!response.ok) {
      throw new Error("Failed to create Player Stats");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating Player Stats:", error.message);
    throw error;
  }
};
