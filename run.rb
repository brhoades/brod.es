require 'sinatra'
require 'RedCloth'

set :root, File.expand_path( File.dirname( __FILE__ ) )
set :public_folder, "./public"

def drawJobs( )
  jobsf = Dir.glob "jobs/*.textile"
  jobsf.sort!.reverse!
  jobs = [ ]

  jobsf.each do |j|
    jobs << ( RedCloth.new File.read j ).to_html
  end

  jobs.join "\n"
end 

get '/' do
  print File.expand_path( File.dirname( $0 ) ), "\n\n"
  erb :index
end

