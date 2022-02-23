import random
import time
import csv
  
def str_time_prop(start, end, time_format, prop):
    """Get a time at a proportion of a range of two formatted times.

    start and end should be strings specifying times formatted in the
    given format (strftime-style), giving an interval [start, end].
    prop specifies how a proportion of the interval to be taken after
    start.  The returned time will be in the specified format.
    """

    stime = time.mktime(time.strptime(start, time_format))
    etime = time.mktime(time.strptime(end, time_format))

    ptime = stime + prop * (etime - stime)

    return time.strftime(time_format, time.localtime(ptime))


def random_date(start, end, prop):
    return str_time_prop(start, end, '%Y-%m-%dT%H:%M:%S', prop)
    


with open('randomdate.csv', 'w', newline='') as csvfile:
    fieldnames = ['createdAt']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    print()
    for i in range(5000):
        writer.writerow({'createdAt': str(random_date("2021-01-01T1:30:32", "2022-01-01T4:50:56", random.random()))+".000+0000"})

        # +' ORDER BY CreatedDate'

#         public class AsyncCleanupBatch implements Database.Batchable<sObject>,Schedulable{

# 	public String query;
#     public Integer startdays,enddays;
    
    
    
#     public AsyncCleanupBatch(){
#         List<Async_Request_Cleanup_Configuration__mdt> asynclst=[Select Id,From_Days_Ago__c,Till_Days_Ago__c from Async_Request_Cleanup_Configuration__mdt where label='default' LIMIT 1];
#         startdays=Integer.valueof(asynclst[0].From_Days_Ago__c);
#         enddays=Integer.valueof(asynclst[0].Till_Days_Ago__c);
#         query='Select Id from Async_Request__c WHERE Createddate >=  LAST_N_DAYS :'+ startdays+'  and Createddate <  LAST_N_DAYS :'+ enddays +' ORDER BY CreatedDate';
        
#     }
    
#     public void execute(SchedulableContext sc){
#        	AsyncCleanupBatch async=new AsyncCleanupBatch();
# 		Database.executeBatch(async,2000);
#    }

#    public Database.QueryLocator start(Database.BatchableContext BC){
#       return Database.getQueryLocator(query);
#    }
    
    

#    public void execute(Database.BatchableContext BC, List<Async_Request__c> scope){
#        delete scope;
#        Database.emptyRecycleBin(scope);
  
#     }
    
   

#    public void finish(Database.BatchableContext BC){
#    }
# }

# SELECT Id FROM Async_Request__c