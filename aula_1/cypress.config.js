module.exports = {
  projectId: 'r2k6he',
    e2e: {
        setupNodeEvents(on, config) {
            { "reporter"; "mochawesome",
                "reporterOptions"; 
                    { "reportDir"; "cypress/report/mochawesome-report",
                    "overwrite"; true,
                    "html"; true,
                    "json"; false,
                    "timestamp"; "mmddyyyy_HHMMss" }}
        },
    },
};
  