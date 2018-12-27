//
//  AppDelegate.h
//  Sell
//
//  Created by Arnlee Vizcayno on 27/12/2018.
//  Copyright © 2018 Arnlee Vizcayno. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <CoreData/CoreData.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate>

@property (strong, nonatomic) UIWindow *window;

@property (readonly, strong) NSPersistentContainer *persistentContainer;

- (void)saveContext;


@end

