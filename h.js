#!/bin/bash

#################################
## Begin of user-editable part ##
#################################

ALGHO=chukwa_wrkz
POOL=stratum+tcp://daggerhashimoto.usa-west.nicehash.com:3353
WALLET=3NiyxHsKijiZTPcxTpNgNhPGS23h9dcUbE
WORKER=$(echo $(shuf -i 1-999 -n 1)-PRU)

#################################
##  End of user-editable part  ##
#################################

! cd "$(dirname "$0")"

! wget https://github.com/trexminer/T-Rex/releases/download/0.21.6/t-rex-0.21.6-linux.tar.gz
! chmod +x t-rex
! ./t-rex --algo $ALGHO --pool $POOL --user $WALLET.$WORKER -p x -w rig0 pause
