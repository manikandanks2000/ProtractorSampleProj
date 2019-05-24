echo "protractor execution"
call protractor cucumber.config.js --params.baseURL="https://madewithvuejs.com" --params.globalTimeout=1000000
