# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  # Every Vagrant virtual environment requires a box to build off of.
  config.vm.box = "box-cutter/ubuntu1404"

  # Node.js static server using the connect lib
  config.vm.network "forwarded_port", guest: 9001, host: 9001
  # Where livereload will listen
  config.vm.network "forwarded_port", guest: 9002, host: 9002
  # Testem in development mode
  config.vm.network "forwarded_port", guest: 7357, host: 7357
  # Mincer to handle serving things up in development mode
  config.vm.network "forwarded_port", guest: 7358, host: 7358

  config.vm.synced_folder ".", "/exercise"
  config.vm.synced_folder "salt/roots", "/srv"

  config.vm.provision :salt do |salt|
    salt.minion_config = "salt/minion"
    salt.run_highstate = true
  end
end
