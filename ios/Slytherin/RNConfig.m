#import "RNConfig.h"

@implementation RNConfig

RCT_EXPORT_MODULE();

- (NSDictionary *)constantsToExport
{
#if RELEASE
  NSString *env=@"release";
#elif BETA
  NSString *env=@"beta";
#else
  NSString *env=@"debug";
#endif
  return @{ @"env":env};
}
+ (BOOL)requiresMainQueueSetup
{
  return YES;
}
@end
