//
//  Utilities.m
//  Sell
//
//  Created by Arnlee Vizcayno on 27/12/2018.
//  Copyright © 2018 Arnlee Vizcayno. All rights reserved.
//

#import "Utilities.h"

@implementation Utilities

+ (NSString *)versionString
{
    NSString *versionStr = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleShortVersionString"];
    
    return [@"v" stringByAppendingString:versionStr];
}

@end
