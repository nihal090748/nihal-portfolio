const username = "nihal090748";
document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

async function loadGitHubProfile() {
  const repoList = document.getElementById("repoList");
  try {
    const headers = { "Accept": "application/vnd.github+json" };
    const [userResponse, reposResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { headers }),
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=5`, { headers })
    ]);
    if (!userResponse.ok || !reposResponse.ok) throw new Error("GitHub API request failed");
    const user = await userResponse.json();
    const repos = await reposResponse.json();

    document.getElementById("ghName").textContent = user.name || user.login;
    document.getElementById("ghBio").textContent = user.bio || "Software developer · GitHub";
    document.getElementById("repoCount").textContent = user.public_repos ?? "—";
    document.getElementById("followerCount").textContent = user.followers ?? "—";
    document.getElementById("followingCount").textContent = user.following ?? "—";

    if (!repos.length) {
      repoList.innerHTML = '<div class="repo-loading">No public repositories found yet.</div>';
      return;
    }
    repoList.innerHTML = repos.map(repo => {
      const language = repo.language || "Repository";
      const stars = repo.stargazers_count || 0;
      return `<div class="repo-item">
        <a href="${repo.html_url}" target="_blank" rel="noreferrer">${escapeHTML(repo.name)}</a>
        <span class="repo-meta">${escapeHTML(language)} · ★ ${stars}</span>
      </div>`;
    }).join("");
  } catch (error) {
    repoList.innerHTML = '<div class="repo-loading">Could not load live GitHub data. Visit the profile directly to see repositories.</div>';
    document.getElementById("apiNote").textContent = "GitHub API may be temporarily unavailable or rate-limited. The rest of the portfolio works normally.";
  }
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[char]));
}
loadGitHubProfile();