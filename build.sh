#!/bin/bash

#The directory with the special files for the chrome extension
chromedir=$1

#Directory with the build script
scriptdir=$(dirname $0)

rm -R $chromedir/deploy
cp -R $chromedir $chromedir/deploy
cp $scriptdir/lib/{driver.js,jquery-1.6.4.min.js} $chromedir/deploy
