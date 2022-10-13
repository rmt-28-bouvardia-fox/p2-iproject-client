import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const usePostStore = defineStore("post", {
  state: () => ({
    localUrl: "http://localhost:3000",
    baseUrl: "https://bukan9gag.herokuapp.com",
    loginData: {},
    posts: [],
    memes: [],
    post: {
      Likes: [],
      User: {},
    },
    currentPage: 0,
  }),
  getters: {},
  actions: {
    // LOGIN
    async login(form) {
      try {
        const loginData = await axios({
          method: "post",
          url: `${this.baseUrl}/login`,
          data: form,
        });
        localStorage.setItem("access_token", loginData.data.access_token);
        this.router.push("/");
        Toast.fire({
          icon: "success",
          title: "Login Successfully",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Cannot Login!",
          text: error.response.data.message,
        });
      }
    },

    // CHECK ACCESS TOKEN
    async checkAccessToken() {
      const access_token = localStorage.access_token;
      if (!access_token) {
        this.loginData = {};
      } else {
        try {
          const loginData = await axios({
            method: "get",
            url: `${this.baseUrl}/authentication`,
            headers: {
              access_token: access_token,
            },
          });
          this.loginData = loginData.data;
        } catch (error) {
          this.router.push("/login");
          this.loginData = {};
          localStorage.removeItem("access_token");
          Swal.fire({
            icon: "error",
            title: "Invalid Token!",
            text: error.response.data.message,
          });
        }
      }
    },

    // LOGOUT
    async logout() {
      localStorage.removeItem("access_token");
      this.router.push("/");
      this.loginData = {};
      Toast.fire({
        icon: "success",
        title: "Logout Successfully",
      });
    },

    // REGISTER
    async register(form) {
      try {
        await axios({
          method: "post",
          url: `${this.baseUrl}/register`,
          data: form,
        });
        this.router.push("/login");
        Toast.fire({
          icon: "success",
          title: "Register Successfully",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Cannot Register!",
          text: error.response.data.message,
        });
      }
    },

    // FETCH POST
    async fetchPosts() {
      this.currentPage = 0;
      try {
        const posts = await axios({
          method: "get",
          url: `${this.baseUrl}/posts/`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.posts = posts.data.posts;
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Cannot Find Post!",
          text: error.response.data.message,
        });
      }
    },

    // FETCH ONE POST
    async fetchPost(postId) {
      try {
        const post = await axios({
          method: "get",
          url: `${this.baseUrl}/posts/${postId}`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.post = post.data;
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Cannot Find Post!",
          text: error.response.data.message,
        });
      }
    },

    // FETCH NEXT PAGE
    getNextPost() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop +
            document.documentElement.clientHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          this.currentPage += 1;
          this.fetchPostsWithPage(this.currentPage);
        }
      };
    },

    //FETCH POST WITH PAGE
    async fetchPostsWithPage(page) {
      try {
        const result = await axios({
          method: "get",
          url: `${this.baseUrl}/posts/?page=${this.currentPage}`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.posts.push(...result.data.posts);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Cannot Find Post!",
          text: error.response.data.message,
        });
      }
    },

    // CREATE POST
    async createPost(form) {
      try {
        await axios({
          method: "post",
          url: `${this.baseUrl}/posts`,
          data: form,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.router.push("/");
        Toast.fire({
          icon: "success",
          title: "Create Post Successfully",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Cannot Add Post!",
          text: error.response.data.message,
        });
      }
    },

    // FETCH POST
    async fetchMemes(page) {
      try {
        if (!page) {
          page = 1;
        }
        const memes = await axios({
          method: "get",
          url: `${this.baseUrl}/posts/memes/?page=${page}`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.memes = memes.data;
        this.router.push("/create");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Cannot Find Memes!",
          text: error.response.data.message,
        });
      }
    },

    // GITHUB SIGN
    async githubSign() {
      try {
        OAuth.initialize("obRZPy0lbKrJG7llJKHItnvxqhM");
        const github = await OAuth.popup("github");

        const loginData = await axios({
          method: "post",
          url: `${this.baseUrl}/githubSignIn`,
          data: {
            githubToken: github.access_token,
          },
        });

        localStorage.setItem("access_token", loginData.data.access_token);
        this.router.push("/");
        Toast.fire({
          icon: "success",
          title: "Login Successfully",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Cannot Login With Github!",
          text: error.response.data.message,
        });
      }
    },

    // TWITTER SIGN
    async twitterSign() {
      try {
        OAuth.initialize("obRZPy0lbKrJG7llJKHItnvxqhM");
        const twitter = await OAuth.popup("twitter");

        const loginData = await axios({
          method: "post",
          url: `${this.baseUrl}/twitterSignIn`,
          data: {
            twitterToken: twitter.oauth_token,
          },
        });

        localStorage.setItem("access_token", loginData.data.access_token);
        this.router.push("/");
        Toast.fire({
          icon: "success",
          title: "Login Successfully",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Cannot Login With Github!",
          text: error.response.data.message,
        });
      }
    },

    // LIKE POST
    async likePost(postId) {
      try {
        const post = await axios({
          method: "post",
          url: `${this.baseUrl}/posts/${postId}/like`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.posts.find((el) => {
          if (el.id === postId) {
            el.Likes.push("placeholder");
          }
        });
        this.fetchPost(postId);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Cannot Like Post",
          text: error.response.data.message,
        });
      }
    },

    // LIKE POST
    async uploadFile(image) {
      try {
        const post = await axios({
          method: "post",
          url: `${this.baseUrl}/posts/memeMulter`,
          data: image,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.fetchPosts();
        this.router.push("/");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Cannot Like Post",
          text: error.response.data.message,
        });
      }
    },
  },
});
