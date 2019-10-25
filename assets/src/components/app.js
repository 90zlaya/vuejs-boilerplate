import zdClient from './../libs/zdClient.js';
import appTemplate from './appTemplate.js';
import child from './child/child.js';

let CLIENT = null;

const app = {

  /* ------------------------------------------------------------------------ */

  template: appTemplate,

  /* ------------------------------------------------------------------------ */

  components: {
    'child': child,
  },

  /* ------------------------------------------------------------------------ */

  data() {
    return {
      state: {
        is_loading: true,
        zd_instance: {},
        ticket: {},
      },
    };
  },

  /* ------------------------------------------------------------------------ */

  created() {
    // Get Zendesk client
    CLIENT = zdClient.getClient();

    // Get Zendesk instance
    this.state.zd_instance = zdClient.getInstance();
  },

  /* ------------------------------------------------------------------------ */

  mounted() {
    // Initialise app
    this.initApp();
  },

  /* ------------------------------------------------------------------------ */

  updated() {},

  /* ------------------------------------------------------------------------ */

  computed: {},

  /* ------------------------------------------------------------------------ */

  methods: {
    initApp() {
      // Get Ticket data
      zdClient.getTicket().then((response) => {
        // Add ticket to the state
        this.state.ticket = response;

        // Stop loader when content is properly loaded
        this.state.is_loading = false;
      });
    },
  },

  /* ------------------------------------------------------------------------ */

};

export default app;