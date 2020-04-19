task :default => [:rake]
task :default => [:playpen]
task :default => [:web]

desc 'build site, populates _site directory'
task :build do
  sh "bundle"
  sh "bundle exec jekyll build"
end

desc 'start rake server'
task :rake => [] do
  sh "bundle exec jekyll serve --host=0.0.0.0"
end

desc 'start playpen server'
task :playpen => [] do
  sh "bundle exec jekyll serve --host=0.0.0.0 -I"
end

desc 'rsync to web'
task :web => [] do
   # sh "sh .deploy-web.sh"
   sh "rake build && . _deployConfig.txt && rsync -avz -e ssh _site/ --delete $remotePath
end