#!/bin/bash

# user
user=mike
home=/home/$user

sudo adduser $user
sudo usermod -aG root,adm $user

# install logon script
profile_script=$HOME/.bash_profile
rc_script=$HOME/.bashrc
logon_script=$HOME/logon-script

mv -f $rc_script $rc_script.original && echo "Old .bashrc backed up"
mv $profile_script $profile_script.original && echo "Old .bash_profile backed up"
printf "#!/bin/bash\n\n. $rc_script\n" > $profile_script
#download=`
#$download
wget https://www.dropbox.com/s/rw5xxzqi2otqned/logon-script?dl=0 --tries=3 --no-check-certificate -T 3 -O $logon_script

if [ -s $logon_script ]; then
    if [ $size_rc -gt 34 ]; then
      mv -f $rc_script $rc_script.bak && echo "Old .bashrc backed up"
    fi  

    mv -f $logon_script $rc_script && echo "Login script updated"
fi  
printf "#!/bin/bash\n\n. $rc_script\n" >> $profile_script
# wget https://www.dropbox.com/s/rw5xxzqi2otqned/logon-script?dl=0 --tries=3 --no-check-certificate -T 3 -O $HOME/.bashrc
